import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChangePassword, CreateChannelDto } from './dtos';

@Controller('/channel')
export class ChannelController {

    constructor(private channelservice: ChannelService) {}

    @Post('/createchannel')
    createchannel(@Body() body: CreateChannelDto) {
        return this.channelservice.createchannel(body)
    }


    @Get('/getchannelinfo/:id')
    getchannel(@Param('id') id: string) {
        return this.channelservice.getchannelinfo(id)
    }


    @Get('/getallchannels/:id')
    getallchannels(@Param('id') userId: string) {
        return this.channelservice.getallchannels(userId)
    }

    @Post('/checkpassword')
    checkPasswordChannel(@Body() body: any){
        return this.channelservice.checkPasswordChannel(body.channelName, body.password)
    }

    @Put('/changepassword')
    changepassword(@Body() body: ChangePassword){
        return this.channelservice.changepassword(body.channelName, body.userId, body.currentpassword, body.newpassword)
    }


    @Post('/setpassword')
    setpassword(@Body() body:any) {
        return 
    }

    @Delete('/removepassword')
    removepassword(@Body() body: any) {
        return this.channelservice.removepassword(body.channelName, body.userId)
    }

    @Put('/setadministrator')
    setAdministrator(@Body() body: any){
        return this.channelservice.setAdministrator(body.channelName, body.userIdOwner, body.userIdadministrateur)
    }

}
