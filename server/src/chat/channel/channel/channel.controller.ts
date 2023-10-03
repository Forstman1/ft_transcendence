import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dtos';

@Controller('/channel')
export class ChannelController {

    constructor(private channelservice: ChannelService) {}

    @Post('/createchannel')
    createchannel(@Body() body: CreateChannelDto) {

        return this.channelservice.createchannel(body)
    }


    @Get('getchannels')
    getchannel() {

    }
}
