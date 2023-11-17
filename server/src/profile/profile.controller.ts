import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { achievements } from './dto/achievements-profile.dto';
import { AuthGuard } from '@nestjs/passport';



@UseGuards(AuthGuard('jwt'))
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

    @Get('activitieshistory/:id')
    async getChartLineData(@Param('id') id: string): Promise<any> {
    return await this.profileService.calculateChartData(id);
    }

    @Get('matchesresults/:id')
    async getMatchesResults(@Param('id') id: string): Promise<any> {
    return await this.profileService.calculateMatchesResults(id);
    }
  
    @Get('achievements/:id')
    async getUserAchievements(@Param('id') id: string): Promise<any> {
        return await this.profileService.determineAchievements(id);
    }

    @Get('matcheshistory/:id')
    async getMatchesHistory(@Param('id') id: string): Promise<any> {
        return await this.profileService.calculateMatchesHistory(id);
    }
    @Get('user/:id')
    async getUser(@Param('id') id: string): Promise<any> {
        return await this.profileService.getUser(id);
    }

    // @Get('friends/:id')
    // async getFriends(@Param('id') id: string): Promise<any> {
    //     return await this.profileService.getFriends(id);
    // }



}
