import {
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Req,
  Res,
  UseGuards,
  BadRequestException,
  UnauthorizedException,
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
  async handleLogout(@Res({ passthrough: true }) res) {
    res.cookie('access_token', '', { expires: new Date() });
    await res.clearCookie('access_token');
    return res.redirect(process.env.CLIENT_URL);
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  @Get('intra/login')
  @UseGuards(IntraAuthGuard)
  handleIntraLogin() {
    return { message: 'Login initiated' };
  }

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

  @Get('intra/callback')
  @UseGuards(IntraAuthGuard)
  async handleIntraCallback(@Req() req, @Res({ passthrough: true }) res) {
    let access_token: string;
    try {
      access_token = await this.authService.login(req.user);
    } catch (error) {
      if (
        error instanceof UnauthorizedException &&
        error.message === 'Two-factor Authentication Required'
      ) {
        const tempToken = await this.authService.issueTemporaryToken(req.user);
        await res.cookie(
          'two_factor_auth_token',
          tempToken,
          this.authService.twoFACookieOptions,
        );
        return res.redirect(process.env.CLIENT_URL + '2fa/verify');
      } else {
        throw error;
      }
    }
    if (access_token === undefined) {
      throw new InternalServerErrorException("Couldn't generate access token");
    }
    await res.cookie(
      'access_token',
      access_token,
      this.authService.cookieOptions,
    );
    return res.redirect(process.env.CLIENT_URL);
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleGoogleLogin() {
    return { message: 'Login initiated' };
  }
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async handleGoogleCallback(@Req() req, @Res({ passthrough: true }) res) {
    let access_token: string;
    try {
      access_token = await this.authService.login(req.user);
    } catch (error) {
      if (
        error instanceof UnauthorizedException &&
        error.message === 'Two-factor Authentication Required'
      ) {
        const tempToken = await this.authService.issueTemporaryToken(req.user);
        await res.cookie(
          'two_factor_auth_token',
          tempToken,
          this.authService.twoFACookieOptions,
        );
        return res.redirect(process.env.CLIENT_URL + '2fa/verify');
      }
    }
    if (access_token === undefined) {
      throw new InternalServerErrorException("Couldn't generate access token");
    }
    await res.cookie(
      'access_token',
      access_token,
      this.authService.cookieOptions,
    );
    return res.redirect(process.env.CLIENT_URL);
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  @Get('github/login')
  @UseGuards(GithubAuthGuard)
  handleGithubleLogin() {
    return { message: 'Login initiated' };
  }

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

  @Get('github/callback')
  @UseGuards(GithubAuthGuard)
  async handleGithubCallback(@Req() req, @Res({ passthrough: true }) res) {
    let access_token: string;
    try {
      access_token = await this.authService.login(req.user);
    } catch (error) {
      if (
        error instanceof UnauthorizedException &&
        error.message === 'Two-factor Authentication Required'
      ) {
        const tempToken = await this.authService.issueTemporaryToken(req.user);
        await res.cookie(
          'two_factor_auth_token',
          tempToken,
          this.authService.twoFACookieOptions,
        );
        return res.redirect(process.env.CLIENT_URL + '2fa/verify');
      }
    }
    if (access_token === undefined) {
      throw new InternalServerErrorException("Couldn't generate access token");
    }
    await res.cookie(
      'access_token',
      access_token,
      this.authService.cookieOptions,
    );
    return res.redirect(process.env.CLIENT_URL);
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

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

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
    await res.cookie(
      'access_token',
      access_token,
      this.authService.cookieOptions,
    );
    return { message: 'Two-factor authentication disabled' };
  }

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

  @Post('2fa/verify')
  @UseGuards(JwtAuthGuard)
  async verifyTwoFaAuth(@Req() req, @Res() res) {
    const user: User | null = await this.userService.findUser({
      id: req.user.id,
    });
    if (user == null) {
      throw new BadRequestException('User not found');
    } else if (user.twoFactorEnabled === false) {
      throw new BadRequestException(
        'Two-factor authentication not enabled for this user',
      );
    }
    const isTwoFaAuthCodeValid = await this.authService.isTwoFaAuthCodeValid(
      req.body.twoFactorAuthCode,
      user,
    );
    if (isTwoFaAuthCodeValid === false) {
      throw new BadRequestException('Invalid two-factor authentication code');
    }
    const access_token = await this.authService.loginWithTwoFactorAuth(user);
    await res.clearCookie('two_factor_auth_token');
    await res.cookie(
      'access_token',
      access_token,
      this.authService.cookieOptions,
    );
    return { message: 'Two-factor authentication successful' };
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  @Get('user')
  @UseGuards(JwtAuthGuard)
  async getUser(@Req() req) {
    const user: User | null = await this.userService.findUser({
      id: req.user.id,
    });
    if (user == null) {
      throw new BadRequestException('User not found');
    }
    return {
      username: user.username,
      email: user.email,
      avatarUrl: user.avatarURL,
      isOnline: user.isOnline,
    };
  }
}
