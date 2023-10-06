import { Injectable } from '@nestjs/common';
import { CreateChannelDto } from './dtos';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from "argon2";




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
    
        const hash = await argon2.hash(channelData.password);

        const channel = await this.prisma.channel.create({
            data: {
                name: channelData.channelName,
                type: channelData.type === "Public" ? 'PUBLIC' : channelData.type === "Private" ? 'PRIVATE' : 'PROTECTED',
                password: channelData.type === "Protected" ? hash : '',
            }
        })
        delete channel.password
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
        let channels: any = await Promise.all(user.channelMember.map(async (channelmember) => {
            const channel = await this.getchannelinfo(channelmember.channelId)
            console.log(channel)
            return channel
        }))
        return channels
    }

    async checkPasswordChannel(channelName: string, password: string) {
        const channel = await this.prisma.channel.findUnique({
            where: {
                name: channelName,
            },
            include: {
                message: true
            }
        })
        if (await argon2.verify(channel.password, password))
        {
            delete channel.password
            return channel
        }
        return {status: "wrong password"}
    }


    async changepassword(channelName:string, userId: string, currentpassword: string, newpassword: string) {
        
        const channel = await this.prisma.channel.findUnique({
            where: {
                name: channelName,
            }
        })

        const channelmembers = await this.prisma.channelMember.findMany({
            where: {
                userId: userId,
                channel: channel,
            }
        })
        const channelmember = channelmembers[0]
        if (channelmember.role === 'OWNER')
        {
            
            if (await (argon2.verify(channel.password, currentpassword)))
            {
                const hash = await argon2.hash(newpassword)
                await this.prisma.channel.update({
                    where: {
                        name: channelName,
                    },
                    data: {
                        password: hash,
                    }
                })
            }
            else
                return {status: "wrong password"}
        }
        console.log(channelmember)
        return channelmember
    }
}
