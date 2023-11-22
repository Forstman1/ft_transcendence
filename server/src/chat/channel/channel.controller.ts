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
        return this.channelservice.changepassword(body.channelId, body.userId, body.currentpassword, body.newpassword)
    }


    @Post('/setpassword')
    setpassword(@Body() body:any) {
        return this.channelservice.setpassword(body.channelName, body.userId, body.password)
    }

    @Delete('/removepassword')
    removepassword(@Body() body: any) {
        return this.channelservice.removepassword(body.channelName, body.userId)
    }

    @Put('/setadministrator')
    setAdministrator(@Body() body: any){
        return this.channelservice.setAdministrator(body.channelName, body.userIdOwner, body.userIdadministrateur)
    }

    @Delete('/removeadministrator')
    removeAdministrator(@Body() body: any){
        return this.channelservice.removeAdministrator(body.channelName, body.userIdOwner, body.userIdadministrateur)
    }

    @Post('/invitemember')
    inviteMember(@Body() body: any){
        return this.channelservice.inviteMember(body.channelId, body.userIdOwner, body.userIdMember)
    }
    
    @Get('/getallmembers/:id')
    getallmembers(@Param('id') id: string){
        return this.channelservice.getallmembers(id)
    }

    @Delete('/leavechannel')
    leavechannel(@Body() body: any){
        return this.channelservice.leaveChannel(body.channelName, body.userId)
    }

    @Delete('/deleteChannel')
    deleteChannel(@Body() body: any){
        return this.channelservice.deleteChannel(body.channelName, body.userId)
    }


    @Get('/getchannelmemberinfo/:channelId/:userId')
    getchannelmemberinfo(@Param('channelId') channelId: string, @Param('userId') userId: string){
        return this.channelservice.getchannelmemberinfo(channelId, userId)
    }

    @Get('/getallchannelsapp/:tofound')
    getallchannelsapp(@Param('tofound') tofound: string) {
        return this.channelservice.getallchannelsapp(tofound)
    }

    @Get('/getallpublicandprivatechannels')
    getallpublicandprivatechannels(){
        return this.channelservice.getallpublicandprivatechannels()
    }

    @Get('/getmember/:id')
    getmember(@Param('id') id: string){
        return this.channelservice.getmember(id)
    }

    @Get('/getallbannedmembers/:id')
    getallbannedmembers(@Param('id') id: string){
        return this.channelservice.getallbannedmembers(id)
    }
}
 