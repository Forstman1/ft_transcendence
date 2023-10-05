import { Controller, Get, Post, Req, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { HttpCode } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Get('intra/login')
  @UseGuards(AuthGuard('42'))
  handleIntraLogin() {
    return { message: 'Login initiated successfully' };
  }

  @Get('intra/callback')
  @UseGuards(AuthGuard('42'))
  handleIntraCallback(@Req() req) {
    return this.authService.login(req.user, false);
  }

  @Post('2fa/enable')
  @HttpCode(200)
  @UseGuards(AuthGuard('jwt'))
  async enableTwoFaAuth(@Req() req) {
    const user = await this.usersService.findUser({
      id: req.user.id,
    });
    await this.usersService.updateUserTwoFaEnabled(user, true);
    const otpAuthUrl = await this.authService.generateTwoFaOtpAuthUrl(user);
    const qrCode = await this.authService.generateQrCodeDataURL(otpAuthUrl);
    return { message: 'Two-factor authentication disabled', qrCode };
  }

  @Post('2fa/disable')
  @HttpCode(200)
  @UseGuards(AuthGuard('jwt'))
  async disableTwoFaAuth(@Req() req) {
    const user = await this.usersService.findUser({
      id: req.user.id,
    });
    await this.usersService.updateUserTwoFaEnabled(user, false);
    return { message: 'Two-factor authentication disabled' };
  }

  @Post('2fa/verify')
  @HttpCode(200)
  @UseGuards(AuthGuard('jwt'))
  async checkTwoFaAuth(@Req() req, @Body() body) {
    if (body.twoFaAuthCode === undefined) {
      throw new UnauthorizedException('Missing authentication code');
    }
    const user = await this.usersService.findUser({
      id: req.user.id,
    });
    const isCodeValid = await this.authService.isTwoFaAuthCodeValid(
      body.twoFaAuthCode,
      user,
    );
    if (!isCodeValid) {
      throw new UnauthorizedException('Wrong authentication code');
    }
    return this.authService.login(req.user, true);
  }
}

// write a commit message for this new