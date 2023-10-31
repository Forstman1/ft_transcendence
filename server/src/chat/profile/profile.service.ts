import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileService {
    constructor (private readonly prisma:PrismaService) {}
    async getProfile(ProfileId) {
        try {
            const profile = await this.prisma.user.findUnique({
                where: {
                    id: ProfileId
                }
            })
            return(profile)
        }
        catch(error){
            return(error)
        }
    }
}
