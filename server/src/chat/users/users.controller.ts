import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';




@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}
    @Get()
    listusers(@Body() Body) {
        return this.usersService.listUsers()
    }
    @Get('./adduser')
    adduser(@Body() body) {
        return this.usersService.add(body)
    }
    // @Get()
    // hello(){
    //     return("hello world")
    // }
}
