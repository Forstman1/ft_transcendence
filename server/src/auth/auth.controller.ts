import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('intra/login')
  @UseGuards(AuthGuard('42'))
  handleIntraLogin() {
    return { message: 'Login initiated successfully' };
  }

  @Get('intra/callback')
  @UseGuards(AuthGuard('42'))
  handleIntraCallback(@Req() req) {
    return this.authService.login(req.user);
  }

  @Get('google/login')
  @UseGuards(AuthGuard('google'))
  hadleGoogleLogin() {
    return { message: 'Login initiated successfully' };
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  handleGoogleCallback(@Req() req) {
    return this.authService.login(req.user);
  }
}
