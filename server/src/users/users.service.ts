import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async createUser(userCreateInput: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({
      data: userCreateInput,
    });
  }

  async updateUser(params: {
    userWhereUniqueInput: Prisma.UserWhereUniqueInput;
    userUpdateInput: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { userWhereUniqueInput, userUpdateInput } = params;
    return this.prismaService.user.update({
      where: {
        username: userWhereUniqueInput.username,
      },
      data: userUpdateInput,
    });
  }

  async deleteUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return this.prismaService.user.delete({
      where: {
        username: userWhereUniqueInput.username,
      },
    });
  }

  async updateUserTwoFaSecret(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    twoFaSecretInput: string,
  ): Promise<User> {
    return this.prismaService.user.update({
      where: {
        username: userWhereUniqueInput.username,
      },
      data: {
        twoFaSecret: twoFaSecretInput,
      },
    });
  }

  async updateUserTwoFaEnabled(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    twoFaEnabledInput: boolean,
  ): Promise<User> {
    return this.prismaService.user.update({
      where: {
        username: userWhereUniqueInput.username,
      },
      data: {
        twoFaEnabled: twoFaEnabledInput,
      },
    });
  }
}
