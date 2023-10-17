import {
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Req,
  Res,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { IntraAuthGuard } from './guards/intra.guard';
import { GoogleAuthGuard } from './guards/google.guard';
import { GithubAuthGuard } from './guards/github.guard';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  /* ------------------------------------------------------------------------------------------------------------------ */

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  handleLogout(@Res() res) {
    res.clearCookie('access_token', this.authService.cookieOptions);
    return { message: 'Logout successful' };
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  @Get('intra/login')
  @UseGuards(IntraAuthGuard)
  handleIntraLogin() {
    return { message: 'Login initiated' };
  }

  @Get('intra/callback')
  @UseGuards(IntraAuthGuard)
  async handleIntraCallback(@Req() req, @Res({ passthrough: true }) res) {
    const access_token = await this.authService.login(req.user);
    if (access_token === undefined) {
      throw new InternalServerErrorException("Couldn't generate access token");
    }
    await res.cookie(
      'access_token',
      access_token,
      this.authService.cookieOptions,
    );
    return { message: 'Login successful' };
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleGoogleLogin() {
    return { message: 'Login initiated' };
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async handleGoogleCallback(@Req() req, @Res({ passthrough: true }) res) {
    const access_token = await this.authService.login(req.user);
    if (access_token === undefined) {
      throw new InternalServerErrorException("Couldn't generate access token");
    }
    await res.cookie(
      'access_token',
      access_token,
      this.authService.cookieOptions,
    );
    return { message: 'Login successful' };
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  @Get('github/login')
  @UseGuards(GithubAuthGuard)
  handleGithubleLogin() {
    return { message: 'Login initiated' };
  }

  @Get('github/callback')
  @UseGuards(GithubAuthGuard)
  async handleGithubCallback(@Req() req, @Res({ passthrough: true }) res) {
    const access_token = await this.authService.login(req.user);
    if (access_token === undefined) {
      throw new InternalServerErrorException("Couldn't generate access token");
    }
    await res.cookie(
      'access_token',
      access_token,
      this.authService.cookieOptions,
    );
    return { message: 'Login successful' };
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  @Post('2fa/enable')
  @UseGuards(JwtAuthGuard)
  async enableTwoFaAuth(@Req() req) {
    const user: User | null = await this.userService.findUser({
      id: req.user.id,
    });
    if (user.twoFactorEnabled === true) {
      throw new BadRequestException(
        'Two-factor authentication already enabled',
      );
    }
    await this.userService.updateUserTwoFactorStatus({ id: user.id }, true);
    const twoFactorOtpAuthUrl =
      await this.authService.generateTwoFactorOtpAuthUrl(user);
    return { twoFactorOtpAuthUrl };
  }

  @Post('2fa/disable')
  @UseGuards(JwtAuthGuard)
  async disableTwoFaAuth(@Req() req, @Res() res) {
    const user: User | null = await this.userService.findUser({
      id: req.user.id,
    });
    if (user.twoFactorEnabled === false) {
      throw new BadRequestException(
        'Two-factor authentication already disabled',
      );
    }
    await this.userService.updateUserTwoFactorStatus({ id: user.id }, false);
    const access_token = this.authService.login(user);
    res.cookie('access_token', access_token, this.authService.cookieOptions);
    return { message: 'Two-factor authentication disabled' };
  }
}
