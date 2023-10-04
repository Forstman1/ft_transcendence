import { Injectable } from '@nestjs/common';
import { CreateChannelDto } from './dtos';
import { PrismaService } from 'src/prisma/prisma.service';




@Injectable()
export class ChannelService {
    constructor(private prisma: PrismaService){}

    async createchannel(channelData: CreateChannelDto) {

        const find = await this.prisma.channel.findUnique({
            where: {
                name: channelData.channelName,
            }
        })
        if (find)
            return {status: "already exists"}
    
        const channel = await this.prisma.channel.create({
            data: {
                name: channelData.channelName,
                type: channelData.type === "PUBLIC" ? 'PUBLIC' : channelData.type === "PRIVATE" ? 'PRIVATE' : 'PROTECTED',
                password: channelData.type === "PROTECTED" ? channelData.password : '',
            }
        })
        const channelMember = await this.prisma.channelMember.create({
            data: {
                role: 'OWNER',
                channel: {
                    connect: {id: channel.id}
                },
                user: {
                    connect: {id: channelData.userId}
                }
            }
        })
        console.log("creating new channel")
        return channel

    }


    async getchannelinfo(id: string) {

            const findchannel = await this.prisma.channel.findUnique({
                where: {
                    id: id,
                }
            })
            if (findchannel)
                return findchannel;
            else
                return ({status: "couldn't found channel"})

        
        }


    async getallchannels(userId: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                channelMember: true,
            }
        })
        let channels: any = await Promise.all( user.channelMember.map(async (channelmember) => {
            const channel = await this.getchannelinfo(channelmember.channelId)
            console.log(channel)
            return channel
        }))
        return channels
    }
}
