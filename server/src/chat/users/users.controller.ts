import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';


@Controller(`users`)
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post()
    async addUser(@Param() frinedUser: Prisma.UserCreateInput, currentUser: Prisma.UserCreateInput) {
        return await this.usersService.addUser(frinedUser, currentUser)
    } 

    @Get(`/list`)
    async listusers() {
        return await this.usersService.listUsers()
    }

    @Get(`:id`)
    async getUser(@Param() id: Prisma.UserWhereUniqueInput) {
        return await this.usersService.getUser(id)
    }

    @Get()
    async getUserByName(@Param() UserName: string) {
        const user = await this.usersService.getUserByUserName(UserName)
        console.log(user)
        return this.usersService.getUserByUserName(UserName)
    }
}
