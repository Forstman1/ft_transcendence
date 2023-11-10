import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMessageDto } from './dto';
import { MessageDto } from '../users/dtos/user.dto';



@Injectable()
export class MessageService {

    constructor (private prisma: PrismaService){}

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
        const channelmember = await this.prisma.channelMember.findMany({
            where: {
                channelId: messageInfo.reciverId,
                userId: user.id,
            }
        })
        if (!channelmember)
            return {status: "couldn't find channelmember"}
        if (!channel)
            return {status: "couldn't find channel"}
        
        const message = await this.prisma.channelMessage.create({
            data: {
                content: messageInfo.content,
                authorName: user.username,
                reciverID: channel.id,
                authorID: channelmember[0].id,
            }
        })
        return message
    }


    async getMessagesChannel(channelId: string) {


        const channel = await this.prisma.channel.findUnique({
            where: {
                id: channelId
            },
            include: {
                channelmessages: true,
            }
        })
        if (!channel.channelmessages)
            return []
        return channel.channelmessages
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

    async getDMMessages() {
        
    }

    async getMessagesUsers(userId: string, reciverId: string): Promise<MessageDto[] | string> {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: userId
                }
            });
            const reciver = await this.prisma.user.findUnique({
                where: {
                    id: reciverId
                }
            });
            if (!user || !reciver)
                return 'User not found'
            
            const DMroom = await this.prisma.dMRoom.findFirst({
                where: {
                    roomMembers: {
                        every: {
                            id: {
                                in: [user.id, reciver.id]
                            }
                        }
                    },
                },
                include: {
                    roomMessages: true,
                }
            })
            return DMroom.roomMessages
        }
        catch (error) {
            return `${error} could not retrieve messages`
        }
    }
}
