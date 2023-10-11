import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { HttpCode } from '@nestjs/common';
import { IntraAuthGuard } from './guards/intra.guard';
import { GoogleAuthGuard } from './guards/google.guard';
import { GithubAuthGuard } from './guards/github.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import {
  UnauthorizedException,
  BadRequestException,
  UnprocessableEntityException,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  /* ------------------------------------------------------------------------------------------------------------------ */

  // TODO Check if the authenticated user has an identical username but different email to an existing user
  // TODO If so, append a random string to the username and update the user's username

  // TODO Check if the authenticated user has an identical email but different username to an existing user
  // TODO If so, return an error message to the user stating that the email is already in use

  @Get('intra/login')
  @UseGuards(IntraAuthGuard)
  handleIntraLogin() {
    return { message: 'Login initiated successfully' };
  }

  @Get('intra/callback')
  @UseGuards(IntraAuthGuard)
  handleIntraCallback(@Req() req, @Res() res) {
    const access_token = this.authService.login(req.user, false);
    if (access_token === undefined) {
      throw new UnauthorizedException();
    }
    res.cookie('access_token', access_token, this.authService.cookieOptions);
  }

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleGoogleLogin() {
    return { message: 'Login initiated successfully' };
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  handleGoogleCallback(@Req() req) {
    return this.authService.login(req.user, false);
  }

  @Get('github/login')
  @UseGuards(GithubAuthGuard)
  handleGithubleLogin() {
    return { message: 'Login initiated successfully' };
  }

  @Get('github/callback')
  @UseGuards(GithubAuthGuard)
  handleGithubCallback(@Req() req) {
    return this.authService.login(req.user, false);
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  // @Post('2fa/enable')
  // @UseGuards(JwtAuthGuard)
  // async enableTwoFaAuth(@Req() req) {
  //   const user = await this.usersService.findUser({
  //     id: req.user.id,
  //   });
  //   if (user.twoFaEnabled === true) {
  //     throw new BadRequestException(
  //       'Two-factor authentication already enabled',
  //     );
  //   }
  //   await this.usersService.updateUserTwoFaEnabled({ id: user.id }, true);
  //   const twoFaOtpAuthUrl = await this.authService.generateTwoFaOtpAuthUrl(
  //     user,
  //   );
  //   return { twoFaOtpAuthUrl };
  // }

  // @Post('2fa/disable')
  // @UseGuards(JwtAuthGuard)
  // async disableTwoFaAuth(@Req() req) {
  //   const user = await this.usersService.findUser({
  //     id: req.user.id,
  //   });
  //   if (user.twoFaEnabled === false) {
  //     throw new BadRequestException(
  //       'Two-factor authentication already disabled',
  //     );
  //   }
  //   await this.usersService.updateUserTwoFaEnabled({ id: user.id }, true);
  //   const twoFaOtpAuthUrl = await this.authService.generateTwoFaOtpAuthUrl(
  //     user,
  //   );
  //   return { twoFaOtpAuthUrl };
  // }

  // @Post('2fa/verify')
  // async checkTwoFaAuth(@Req() req, @Body() body: { twoFaAuthCode: string }) {
  //   const user = await this.usersService.findUser({
  //     id: req.user.id,
  //   });
  //   if (user.twoFaEnabled === false) {
  //     throw new BadRequestException('Two-factor authentication disabled');
  //   } else if (body.twoFaAuthCode === undefined) {
  //     throw new BadRequestException('Missing authentication code');
  //   }
  //   const isCodeValid = await this.authService.isTwoFaAuthCodeValid(
  //     body.twoFaAuthCode,
  //     user,
  //   );
  //   if (!isCodeValid) {
  //     throw new UnprocessableEntityException('Wrong authentication code');
  //   }
  //   return this.authService.login(req.user, true);
  // }
}
