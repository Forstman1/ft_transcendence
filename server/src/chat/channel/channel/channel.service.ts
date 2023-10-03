import { Injectable } from '@nestjs/common';
import { CreateChannelDto } from './dtos';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChannelService {
    constructor(private prisma: PrismaService){}

    async createchannel(channelData: CreateChannelDto) {

        this.prisma.channel.create({
            data: {
                name: channelData.channelName,
                type: channelData.type,
                
            }
        })
        return "ana hna " + channelData.channelName

    }
}
