import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';


@Controller(`users`)
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get(`friends/:id`)
    async listFriends(@Param() id: Prisma.UserWhereUniqueInput) { 
        return await this.usersService.listFriends(id)
    }

    @Get(`:id`)
    async getUser(@Param() id: Prisma.UserWhereUniqueInput) {
        return await this.usersService.getUser(id)
    }

    @Get(`chatList/:id`)
    async getChatList(@Param() id: Prisma.UserWhereUniqueInput) {
        return await this.usersService.getChatList(id)
    }
    
    @Post(`sendFriendRequest/:id`)
    async sendFriendRequest(@Param() id: Prisma.UserWhereUniqueInput, @Body() friendId: Prisma.UserWhereUniqueInput) {

    }

    @Post(`addToChat/:id`)
    async addToChat(@Param() id: Prisma.UserWhereUniqueInput, @Body() friendId: Prisma.UserWhereUniqueInput) {
        return await this.usersService.addToChat(id, friendId)
    }

    @Post(`aceptFriendRequest/:id`)
    async acceptFriendRequest(@Param() id: Prisma.UserWhereUniqueInput, @Body() friendId: Prisma.UserWhereUniqueInput) {
        return await this.usersService.acceptFriendRequest(id, friendId)
    }
    @Get('/listusers/:id')
    listusers(@Param('id') id: string) {
        return this.usersService.listUsers(id)
    }



    @Get('/getusers/:tofound')
    getuserstofound(@Param('tofound') tofound: string) {
        return this.usersService.getuserstofound(tofound)
    }

    
    // @Get()
    // hello(){
    //     return("hello world")
    // }
}
