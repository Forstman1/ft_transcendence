import { Controller, Get, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor (private readonly profileService:ProfileService) {}

    @Get()
    getprofile(@Body() Body) {
        return this.profileService.getProfile(Body)
    } 

}


