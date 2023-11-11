import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { achievements } from './dto/achievements-profile.dto';
import { AuthGuard } from '@nestjs/passport';



// @UseGuards(AuthGuard('jwt'))
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('achievements/:id')
  async getUserAchievements(@Param('id') id: string): Promise<any> {
    const gameHistory = await this.profileService.findGameHistory(id);
  
    if (!gameHistory) {
      // Handle error or return appropriate response
      return { error: 'Failed to fetch game history data.' };
    }
    const userAchievements = this.profileService.determineAchievements(gameHistory);
    return userAchievements;
  }

  @Get('activitieshistory/:id')
  async getChartData(@Param('id') id: string): Promise<any> {
    const chartData = await this.profileService.calculateChartData(id);
    return chartData;
  }

}
