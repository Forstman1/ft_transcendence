import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { achievements } from './dto/achievements-profile.dto';
import { AuthGuard } from '@nestjs/passport';



// @UseGuards(AuthGuard('jwt'))
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('id')
  getAchievements(@Param('id') id: string) {
    return this.profileService.findAll(id);
  }

}
