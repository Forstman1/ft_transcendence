import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';




@Controller('/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}
    @Get('/listusers')
    listusers(@Body() Body) {
        return this.usersService.listUsers()
    }
    @Get('/adduser')
    adduser(@Body() body) {
        return this.usersService.add(body)
    }
    @Get('/getuser/:id')
    getuser(@Param('id') id: string) {
        return this.usersService.getUser(id)
    }
    // @Get()
    // hello(){
    //     return("hello world")
    // }
}
