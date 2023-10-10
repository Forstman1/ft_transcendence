import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMessageDto } from './dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class MessageService {

    constructor (private prisma: PrismaService, private userService: UsersService){}

    async createmessage(messageInfo: CreateMessageDto) {
        
        const user = await this.prisma.user.findUnique({
            where: {
                id: messageInfo.userId
            }
        })
        if (!user)
            return {status: "couldn't find user"}
        
        const channel = await this.prisma.channel.findUnique({
            where: {
                id: messageInfo.reciverId,
            }
        })
        if (!channel)
            return {status: "couldn't find channel"}
        const message = await this.prisma.message.create({
            data: {
                content: messageInfo.content,
                authorName: user.username,
                author: {
                    connect: user,
                },
                reciver: {
                    connect: channel
                }

            }
        })
        return message
    }


    async getMessages(channelId: string) {

        const channel = await this.prisma.channel.findUnique({
            where: {
                id: channelId
            },
            include: {
                message: true,
            }
        })

        return channel.message
    }

    async getuserinfo(userId: string) {


        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            }
        })
        if (!user)
            return {status: "couldn't find user"}
        return user;
    }

}