import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dtos';

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
}
