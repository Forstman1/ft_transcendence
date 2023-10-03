import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChannelService } from './channel.service';

@Controller('channel')
export class ChannelController {

    constructor(private channelservice: ChannelService) {}

    @Post('/createchannel')
    createchannel(@Body() body:any) {
        return this.channelservice.createchannel()
    }


    @Get('getchannels')
    getchannel() {

    }
}
