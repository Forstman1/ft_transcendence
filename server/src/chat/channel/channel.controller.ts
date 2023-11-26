import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChangePassword, CreateChannelDto } from './dtos';

@Controller('/channel')
export class ChannelController {

    constructor(private channelservice: ChannelService) {}



    @Get('/getallchannels/:id')
    getallchannels(@Param('id') userId: string) {
        return this.channelservice.getallchannels(userId)
    }


    
    @Get('/getallmembers/:id')
    getallmembers(@Param('id') id: string){
        return this.channelservice.getallmembers(id)
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
 