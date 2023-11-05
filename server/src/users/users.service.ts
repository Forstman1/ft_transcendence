import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async createUser(userCreateInput: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: userCreateInput,
    });
  }

  async updateUser(params: {
    userWhereUniqueInput: Prisma.UserWhereUniqueInput;
    userUpdateInput: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { userWhereUniqueInput, userUpdateInput } = params;
    return this.prisma.user.update({
      data: userUpdateInput,
      where: userWhereUniqueInput,
    });
  }

  async deleteUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return this.prisma.user.delete({
      where: userWhereUniqueInput,
    });
  }
}
