import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { authenticator } from 'otplib';
import { UsersFindDto } from './users-find.dto';
import { UsersCreateDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  /* ------------------------------------------------------------------------------------------------------------------ */

  async findUser(userInput: UsersFindDto): Promise<User | null> {
    const user: User | null = await this.prismaService.user.findUnique({
      where: { email: userInput.email },
    });
    return user;
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  async createUser(userInput: UsersCreateDto): Promise<User | null> {
    const userData: Prisma.UserCreateInput = {
      email: userInput.email,
      username: userInput.username,
      fullname: userInput.fullname,
      avatarURL: userInput.avatarURL ?? null,
      coalitionURL: userInput.coalitionURL ?? null,
      coalitionColor: userInput.coalitionColor ?? null,
    };
    const user: User | null = await this.prismaService.user.create({
      data: userData,
    });
    return user;
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  async updateUserTwoFactorEnabled(
    userInput: UsersFindDto,
    twoFactorEnabledInput: boolean,
  ): Promise<User> {
    const twoFactorSecret = twoFactorEnabledInput
      ? authenticator.generateSecret()
      : null;
    return this.prismaService.user.update({
      where: {
        email: userInput.username,
      },
      data: {
        twoFactorEnabled: twoFactorEnabledInput,
        twoFactorSecret: twoFactorSecret,
      },
    });
  }

  async isTwoFactorEnabled(userInput: UsersFindDto): Promise<boolean> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: userInput.email,
      },
    });
    return user.twoFactorEnabled;
  }
}
