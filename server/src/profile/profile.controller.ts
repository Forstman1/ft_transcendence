import { Controller, Get, Put, Body, Param, UseInterceptors, UploadedFile, BadRequestException, UseGuards, Request } from '@nestjs/common';
import { StreamableFile } from '@nestjs/common';
import { validate } from 'class-validator';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProfileService } from './profile.service';
import { UpdateUserDto } from './dto/updateuser-profile.dto';
import { AuthGuard } from '@nestjs/passport';
import { diskStorage } from 'multer';
import { createReadStream } from 'fs';
import * as Path  from 'path';
import {v4 as uuid} from 'uuid';


@UseGuards(AuthGuard('jwt'))
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

/*----------------------------------------------------------------------------------------------------------------------------------------*/

    @Get('activitieshistory/:id')
    async getChartLineData(@Param('id') id: string): Promise<any> {
    return await this.profileService.calculateChartData(id);
    }

/*----------------------------------------------------------------------------------------------------------------------------------------*/

    @Get('matchesresults/:id')
    async getMatchesResults(@Param('id') id: string): Promise<any> {
    return await this.profileService.calculateMatchesResults(id);
    }

/*----------------------------------------------------------------------------------------------------------------------------------------*/
  
    @Get('achievements/:id')
    async getUserAchievements(@Param('id') id: string): Promise<any> {
        return await this.profileService.determineAchievements(id);
    }

/*----------------------------------------------------------------------------------------------------------------------------------------*/

    @Get('matcheshistory/:id')
    async getMatchesHistory(@Param('id') id: string): Promise<any> {
        return await this.profileService.calculateMatchesHistory(id);
    }

/*----------------------------------------------------------------------------------------------------------------------------------------*/

    @Get('user/:id')
    async getUser(@Param('id') id: string): Promise<any> {
        return await this.profileService.getUser(id);
    }

/*----------------------------------------------------------------------------------------------------------------------------------------*/

    // @Get('friends/:id')
    // async getFriends(@Param('id') id: string): Promise<any> {
    //     return await this.profileService.getFriends(id);
    // }

/*----------------------------------------------------------------------------------------------------------------------------------------*/

    @Put('settings')
    @UseInterceptors(FileInterceptor('avatar', { 
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const fileExtension = file.originalname.split('.')[1];
                const newfilename = uuid() + '.' + fileExtension;
                cb(null, newfilename);
            }
        }),
        fileFilter: (req, file, cb) => {
            const fileExtension = (file.originalname.match(/\.(jpg|jpeg|png|gif)$/i) || [])[1];
            const allowedExtensionsRegex = /(jpg|jpeg|png|gif)$/i;
            const isValidExtension = allowedExtensionsRegex.test(fileExtension);
            console.log('&&&&&&&&&&&&&&&&&&&&_______________________________________________________________________________________&&&&&&&&&&&&&&&&&');
            console.log(file.mimetype);
            if (file.mimetype.startsWith('image/') && isValidExtension) {
                cb(null, true);
            } else {
                cb(new BadRequestException({'avatar':'Invalid file type'}), false);
            }
        }
    }))
    async updateUser(
    @UploadedFile() avatar: Express.Multer.File,
    @Request() request: any,
    @Body() body: UpdateUserDto,
    ): Promise<any> {
      try {
        // if (!avatar) {
        //     throw new BadRequestException('File not provided');
        // }

        return this.profileService.updateUser(body, avatar, request.user.id);
      } catch (error) {
        throw new BadRequestException(error.message);
      }
    }

/*----------------------------------------------------------------------------------------------------------------------------------------*/
    @Get('avatars/:filename')
    async getAvatar(@Param('filename') filename: string): Promise<any> {
        const fileName = Path.normalize(filename).replace(/^(\.\.(\/|\\|$))+/, '');
        const filePath = Path.join(process.cwd(), 'uploads', fileName);
        try {
        const fileStream = createReadStream(filePath);
        return new StreamableFile(fileStream);
        } catch (err) {
        console.error('Error reading file:', err);
        return 'File not found';
        }
    }


}
