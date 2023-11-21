import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';


@Controller(`users`)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(`friends`)
  @UseGuards(JwtAuthGuard)
  async listFriends(@Request() request) {
    const User: Prisma.UserWhereUniqueInput = {
      id: request.user.id,
    };
    return await this.usersService.listFriends(User);
  }

  @Get(`:id`)
  async getUser(@Param() id: Prisma.UserWhereUniqueInput) {
    return await this.usersService.getUser(id);
  }

  @Get(`chatList/:id`)
  async getChatList(@Param() id: Prisma.UserWhereUniqueInput) {
    return await this.usersService.getChatList(id);
  }

  @Post(`sendFriendRequest/:id`)
  async sendFriendRequest(
    @Param() id: Prisma.UserWhereUniqueInput,
    @Body() friendId: Prisma.UserWhereUniqueInput,
  ) {}

  @Post(`addToChat/:id`)
  async addToChat(
    @Param() id: Prisma.UserWhereUniqueInput,
    @Body() friendId: Prisma.UserWhereUniqueInput,
  ) {
    return await this.usersService.addToChat(id, friendId);
  }

  @Post(`aceptFriendRequest/:id`)
  async acceptFriendRequest(
    @Param() id: Prisma.UserWhereUniqueInput,
    @Body() friendId: Prisma.UserWhereUniqueInput,
  ) {
    return await this.usersService.acceptFriendRequest(id, friendId);
  }

  @Get(`getAllUsers/:id`)
  async getAllUsers(@Param() id: Prisma.UserWhereUniqueInput) {
    return await this.usersService.getAllUsers(id);
  }

  @Get('/getuser/:id')
  getuser(@Param('id') id: string) {
    return this.usersService.getUserbyId(id);
  }

  @Get('/getusers/:tofound')
  getuserstofound(@Param('tofound') tofound: string) {
    return this.usersService.getuserstofound(tofound);
  }
}
