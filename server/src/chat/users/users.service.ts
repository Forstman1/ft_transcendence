import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Room, Users } from './dtos/user.dto';
import { Prisma, User } from '@prisma/client';
import { da } from '@faker-js/faker';



@Injectable()
export class UsersService {
    private rooms: Room[]
    constructor (private readonly prisma: PrismaService) {}

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

    async addUser(frinedUser: Prisma.UserCreateInput, currentUser: Prisma.UserCreateInput): Promise<void | string> {
        try {
            await this.prisma.user.update({
                where: { id: frinedUser.id },
                data: {
                    friendOf :{
                        connect:[{id: currentUser.id}]
                    },
                }
            })

            await this.prisma.user.update({
                where: { id: currentUser.id },
                data: {
                    friends :{
                        connect:[{id: frinedUser.id}]
                    },
                }
            })
         
        }
        catch (error) {
            return `${error} could not add the user`
        }
    }

    async listUsers(): Promise<User[] | string> {
        try {
            return await this.prisma.user.findMany({})
        }
        catch(error) {
            return `${error} no Users found`
        }
    }

  

    async addRoom(roomName: string, host: Users): Promise<void> {
        await this.rooms.push({name: roomName, host, users: [host]})
    }
    async getRoomByName(roomName: string): Promise<number> {
        const roomIndex =  this.rooms.findIndex((room) => room?.name === roomName)
        return roomIndex
    }

    async getRoomHost(roomName: string): Promise<Users> {
        const roomIndex = await this.getRoomByName(roomName)
        return this.rooms[roomIndex].host
    }

    async addUserToRoom(roomName:string, user: Users) : Promise<void> {
        const roomIndex = await this.getRoomByName(roomName)
        const host = await this.getRoomHost(roomName)
        if(roomIndex !== -1) {
            this.rooms[roomIndex].users.push(user)
        }
        if (host.userID === user.socketID) {
            this.rooms[roomIndex].host.socketID = user.socketID
        }
        else {
            await this.addRoom(roomName, host)
        }
    }


    async getRoomsBySocketID(socketID: string): Promise<Room[]> {

        const room = await this.rooms.filter((room) => {
            const found = room.users.find((user) => {user.socketID === socketID})
            if (found) 
                return found
        })
        return room
    }

    async removeRoom(roomName: string): Promise<void> {
        const findRoom = await this.getRoomByName(roomName)
        if (findRoom !== -1) {
          this.rooms = this.rooms.filter((room) => room.name !== roomName)
        }
    }

    async removeUserFromRoom(roomName: string, socketID): Promise<void> {
        const room = await this.getRoomByName(roomName)
        this.rooms[room].users = this.rooms[room].users.filter((user) => user.socketID !== socketID)
        if (this.rooms[room].users.length === 0) {
          await this.removeRoom(roomName)
        }
    }

    async removeFromAllRooms(socketID: string) {
        const rooms = await this.getRoomsBySocketID(socketID)
        for(const room of rooms) {
            await this.removeUserFromRoom(room.name, socketID)
        }
    }

    
}
