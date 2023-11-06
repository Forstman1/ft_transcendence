import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Room, MessageDto } from './dtos/user.dto';
import { Prisma, User } from '@prisma/client';





@Injectable()
export class UsersService {
    private rooms: Room[]
    constructor(private readonly prisma: PrismaService) { }
    
//!---------------User------------------------!//

    async getUserByUserName(userName: string) {

        try {
            return await this.prisma.user.findUnique({
                where: { username: userName }
            });
        } catch (error) {
            return `${error} could not find the user`;
        }
    }

    async getUser(id: Prisma.UserWhereUniqueInput): Promise<User | string> {
        try {
            return await this.prisma.user.findUnique({
                where: id
            });
        } catch (error) {

            return `${error} could not find the user`;
        }
    }

    async listUsers(id: Prisma.UserWhereUniqueInput): Promise<User[] | string> {
        try {
            return await this.prisma.user.findMany({
                where: {
                    NOT: {
                        id: id.id
                    }
                }
            })
        }
        catch(error) {
            return `${error} no Users found`
        }
    }

    //!---------------FriendRequest------------------------!//
    async sendFriendRequest(id: Prisma.UserWhereUniqueInput, friendId: Prisma.UserWhereUniqueInput): Promise<User | string> { 
        try {
            const user = await this.prisma.user.findUnique({
                where: id
            })
            const friend = await this.prisma.user.findUnique({
                where: friendId
            })
            if (!user) {
                return 'User not found'
            }
            if (!friend) {
                return 'Friend not found'
            }
            await this.prisma.friendRequest.create({
                data: {
                    fromUserId: user.id,
                    toUserId: friend.id,
                    status: 'pending'
                }
            })
        }
        catch (error) {
            return `${error} could not send friend request`
        }
    }
    async acceptFriendRequest(id: Prisma.UserWhereUniqueInput, friendId: Prisma.UserWhereUniqueInput): Promise<User | string> {
    try {
        const user = await this.prisma.user.findUnique({
            where: id
        })
        const friend = await this.prisma.user.findUnique({
            where: friendId
        })
        if (!user) {
            return 'User not found'
        }
        if (!friend) {
            return 'Friend not found'
        }
        await this.prisma.friendRequest.updateMany({
            where: {
                fromUserId: friend.id,
                toUserId: user.id,
                status: 'pending'
            },
            data: {
                status: 'accepted'
            }
        })
        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                friends: {
                    connect: {
                        id: friend.id
                    }
                }
            }
        })
        await this.prisma.user.update({
            where: { id: friend.id },
            data: {
                friends: {
                    connect: {
                        id: user.id
                    }
                }
            }
        })
    }
    catch (error) {
        return `${error} could not accept friend request`
    }
    }


        async declineFriendRequest(id: Prisma.UserWhereUniqueInput, friendId: Prisma.UserWhereUniqueInput): Promise<User | string> { 
        try {
            const user = await this.prisma.user.findUnique({
                where: id
            })
            const friend = await this.prisma.user.findUnique({
                where: friendId
            })
            if (!user) {
                return 'User not found'
            }
            if (!friend) {
                return 'Friend not found'
            }
            await this.prisma.friendRequest.updateMany({
                where: {
                    fromUserId: friend.id,
                    toUserId: user.id,
                    status: 'pending'
                },
                data: {
                    status: 'declined'
                }
            })
        }
        catch (error) {
            return `${error} could not decline friend request`
        }
    }

    //!---------------ListofFriend && ChatList------------------------!//

    async UpdateFrindList(user: Prisma.UserWhereUniqueInput) {
       
        const friendRequests = await this.prisma.friendRequest.findMany({
            where: {
                OR: [
                    {
                        fromUserId: user.id,
                        status: 'accepted'
                    },
                    {
                        toUserId: user.id,
                        status: 'accepted'
                    }
                ]
            },
        })
        for (const friendRequest of friendRequests) {
            await this.prisma.user.update({
                where: { id: friendRequest.fromUserId },
                data: {
                    friends: {
                        connect: {
                            id: friendRequest.toUserId
                        }
                    }
                }
            })
            await this.prisma.user.update({
                where: { id: friendRequest.toUserId },
                data: {
                    friends: {
                        connect: {
                            id: friendRequest.fromUserId
                        }
                    }
                }
            })
        }
    }
    

    
    async listFriends(id: Prisma.UserWhereUniqueInput): Promise<User[] | string> {
        this.UpdateFrindList(id)
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: id.id
                },
                include: {
                    friends: {
                        where: {
                            chatBy: {
                                none: {id: id.id},
                            }
                        }
                    }
                }               
            });
            if (user)
                return user.friends
            else
                return 'User not found'
        }
        catch (error) {
        return `${error} could not retrieve friend list`;
        }
    }

    async getChatList(id: string | Prisma.UserWhereUniqueInput): Promise<User[] | string> {
        try {
            if (typeof id === 'string')
                id = { id }
            const user = await this.prisma.user.findUnique({
                where:
                    { id: id.id },
                include: {
                    chatWith: true
                }  
            });
            if (user)
                return user.chatWith
            else
                return 'User not found'
        }
        catch (error) {
            return `${error} could not retrieve chat list`;
            }
    }

    async addToChat(User: Prisma.UserWhereUniqueInput, friendId: Prisma.UserWhereUniqueInput): Promise<User | string> { 
        try { 
            const user = await this.prisma.user.findUnique({
                where: {id: User.id}
            })
            const friend = await this.prisma.user.findUnique({
                where: {id: friendId.id}
            })
            if (!user) {
                return 'User not found'
            }
            if (!friend) {
                return 'Friend not found'
            }
            
            await this.prisma.user.update({
                where: { id: user.id },
                data: {
                    chatWith: {
                        connect: {
                            id: friend.id
                        }
                    }
                }
            })
        }
        catch (error) {
            return `${error} could not add to chat`
        }
    }


    //!---------------Direct Message room------------------------!//
    async creatRoom(userId: string, reciverId: string): Promise<string | null> {
        try {
            const user1 = await this.prisma.user.findUnique({
                where: {
                    id: userId
                }
            });
            const user2 = await this.prisma.user.findUnique({
                where: {
                    id: reciverId
                }
            });
            if (!user1 || !user2)
                return (null);
            const room = await this.prisma.dMRoom.create({
                data: {
                    roomMembers: {
                        connect: [
                            { id: user1.id },
                            {id: user2.id}
                       ]
                    }
                }
            })
            return room.id
        }
        catch (error) {
            return 'room created'
        }
    }

    async getRoom(userId: string, reciverId: string): Promise<string | null> {
        try {
            const user1 = await this.prisma.user.findUnique({
                where: {
                    id: userId
                }
            });
            const user2 = await this.prisma.user.findUnique({
                where: {
                    id: reciverId
                }
            });
            if (!user1 || !user2)
                return (null);
            const room = await this.prisma.dMRoom.findFirst({
                where: {
                    roomMembers: {
                        every: {
                            id: {
                                in: [user1.id, user2.id]
                            }
                        }
                    }
                }
            })
            return room.id
        }
        catch (error) {
            return 'room created'
        }
    }
    
    async getRooms(userId: Prisma.UserWhereUniqueInput): Promise<string[] | string> {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId.id
            }
        })
        if (!user)
            return `No such user`
        try {
            const rooms = await this.prisma.dMRoom.findMany({
                where: {
                    roomMembers: {
                        some: {
                            id: userId.id
                        }
                    }
                },
                select: {
                    id: true,
                }
            })
            const roomsId = rooms.map((room) => room.id)
            return roomsId;
        }
        catch (error) {
            return `can't get rooms`
        }
    }

    //!---------------Message Storing------------------------!//



    async createMessage(messageInfo: MessageDto): Promise<string | MessageDto> {
        const user = await this.prisma.user.findUnique({
            where: {
                id: messageInfo.authorName
            }
        })
        if(!user)
            return `user Not found`
        const reciver = await this.prisma.dMRoom.findUnique({
            where: {
                id: messageInfo.reciverID
            }
        }) 
        if(!reciver)
            return `reciver Not found`
        try { 
            const message = await this.prisma.userMessage.create({
                data: {
                    content: messageInfo.content,
                    authorName: user.username, 
                    authorID: user.id,
                    reciverID: reciver.id,
                    createdAt: new Date(),
                }
            })
            return message;
        }
        catch (error) {
            return `${error} could not create message`
        }
        return
    }
    
    // async addRoom(roomName: string, host: user): Promise<void> {
    //     await this.rooms.push({name: roomName, host, users: [host]})
    // }
    // async getRoomByName(roomName: string): Promise<number> {
    //     const roomIndex =  this.rooms.findIndex((room) => room?.name === roomName)
    //     return roomIndex
    // }

    // async getRoomHost(roomName: string): Promise<user> {
    //     const roomIndex = await this.getRoomByName(roomName)
    //     return this.rooms[roomIndex].host
    // }

    // async addUserToRoom(roomName:string, user: user) : Promise<void> {
    //     const roomIndex = await this.getRoomByName(roomName)
    //     const host = await this.getRoomHost(roomName)
    //     if(roomIndex !== -1) {
    //         this.rooms[roomIndex].users.push(user)
    //     }
    //     if (host.id === user.socketID) {
    //         this.rooms[roomIndex].host.socketID = user.socketID
    //     }
    //     else {
    //         await this.addRoom(roomName, host)
    //     }
    // }


    // async getRoomsBySocketID(socketID: string): Promise<Room[]> {

    //     const room = this.rooms?.filter((room) => {
    //         const found = room.users.find((user) => {user.socketID === socketID})
    //         if (found) 
    //             return found
    //     })
    //     return room
    // }

    // async removeRoom(roomName: string): Promise<void> {
    //     const findRoom = await this.getRoomByName(roomName)
    //     if (findRoom !== -1) {
    //       this.rooms = this.rooms.filter((room) => room.name !== roomName)
    //     }
    // }

    // async removeUserFromRoom(roomName: string, socketID): Promise<void> {
    //     const room = await this.getRoomByName(roomName)
    //     this.rooms[room].users = this.rooms[room].users.filter((user) => user.socketID !== socketID)
    //     if (this.rooms[room].users.length === 0) {
    //       await this.removeRoom(roomName)
    //     }
    // }

    // async removeFromAllRooms(socketID: string) {
    //     const rooms = await this.getRoomsBySocketID(socketID)
    //     if (rooms) {
    //         for(const room of rooms) {
    //             await this.removeUserFromRoom(room.name, socketID)
    //         }
    //     }
    // }
 
}
