import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { authenticator } from 'otplib';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  /* ------------------------------------------------------------------------------------------------------------------ */

  async findUser(userInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
    const user: User | null = await this.prismaService.user.findUnique({
      where: userInput,
    });
    return user;
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  async createUser(userInput: UserDto): Promise<User | null> {
    const userData: Prisma.UserCreateInput = {
      email: userInput.email,
      username: userInput.username,
      fullname: userInput.fullname,
      avatarURL: userInput.avatarURL,
      coalitionURL: userInput.coalitionURL,
      coalitionColor: userInput.coalitionColor,
      coalitionName: userInput.coalitionName,
    };
    const user: User | null = await this.prismaService.user.create({
      data: userData,
    });
    return user;
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  async updateUserTwoFactorStatus(
    userInput: Prisma.UserWhereUniqueInput,
    twoFactorStatus: boolean,
  ): Promise<User | null> {
    const generatedTwoFactorSecret = twoFactorStatus
      ? authenticator.generateSecret()
      : null;
      console.log(generatedTwoFactorSecret);
      const user: User | null = await this.prismaService.user.update({
      where: userInput,
      data: {
        twoFactorEnabled: twoFactorStatus,
        twoFactorSecret: generatedTwoFactorSecret,
      },
    });
    return user;
  }

  /* ------------------------------------------------------------------------------------------------------------------ */
 
  async isTwoFactorEnabled(
    userInput: Prisma.UserWhereUniqueInput,
  ): Promise<boolean> {
    const user = await this.prismaService.user.findUnique({
      where: userInput,
    });
    return user.twoFactorEnabled;
  }
}
