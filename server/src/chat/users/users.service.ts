import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UsersService {
    constructor (private readonly prisma: PrismaService) {}
    async add(userData) {
        try {
            const adduser = await this.prisma.user.findUnique({
                where : {
                    id : userData.id
                }
            })
            return adduser
        }
        catch(error){
            return error
        }
    }
    
    async listUsers(){
        try {
            const listusers = await this.prisma.user.findMany({
                // where: {
                //     username: {
                //         contains: data
                //     }
                // }
            })
            return listusers
        }
        catch(error){
            return error
        }
    }

    async getUser(id: string){
        try {
            const getuser = await this.prisma.user.findUnique({
                where: {
                    id: id
                }
            })
            return getuser
        }
        catch(error){
            return error
        }
    }
}
