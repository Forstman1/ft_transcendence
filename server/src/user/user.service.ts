import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { authenticator } from 'otplib';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  /* ------------------------------------------------------------------------------------------------------------------ */

  async findUserOrThrow(userInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
    const user: User | null = await this.prismaService.user.findUniqueOrThrow({
      where: userInput,
    });
    return user;
  }

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
    const createdUser: User | null = await this.prismaService.user.create({
      data: userData,
    });
    return createdUser;
  }
 
  /* ------------------------------------------------------------------------------------------------------------------ */

  async updateUserTwoFactorStatus(
    userInput: Prisma.UserWhereUniqueInput,
    twoFactorStatus: boolean,
    inputTwoFactorSecret: string,
  ): Promise<User | null> {
    const updatedUser = await this.prismaService.user.update({ // throws RecordNotFound
      where: userInput,
      data: {
        twoFactorEnabled: twoFactorStatus,
        twoFactorSecret: (twoFactorStatus ? inputTwoFactorSecret : null),
      },
    });
    return updatedUser;
  }
 
  /* ------------------------------------------------------------------------------------------------------------------ */

  // async createUserTwoFactorKey(
  //   userInput: Prisma.UserWhereUniqueInput,
  // ): Promise<User | null> {
  //   const generatedTwoFactorSecret = authenticator.generateSecret();
  //   if (!generatedTwoFactorSecret) {
  //     throw new Error('Two Factor Secret is not set');
  //   }
  //   const updatedUser: User | null = await this.prismaService.user.update({
  //     where: userInput,
  //     data: {
  //       twoFactorSecret: generatedTwoFactorSecret,
  //     },
  //   });
  //   return updatedUser;
  // }

  /* ------------------------------------------------------------------------------------------------------------------ */

  // async deleteUserTwoFactorKey(
  //   userInput: Prisma.UserWhereUniqueInput,
  // ): Promise<User | null> {
  //   const updatedUser: User | null = await this.prismaService.user.update({
  //     where: userInput,
  //     data: {
  //       twoFactorSecret: null,
  //     },
  //   });
  //   return updatedUser;
  // }

  /* ------------------------------------------------------------------------------------------------------------------ */
 
  async isTwoFactorEnabled(
    userInput: Prisma.UserWhereUniqueInput,
  ): Promise<boolean> {
    const foundUser = await this.prismaService.user.findUniqueOrThrow({
      where: userInput,
    });
    return foundUser.twoFactorEnabled;
  }
}
