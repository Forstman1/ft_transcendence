import {
  Controller, Get, Post, Put, Req, Res,
  UseGuards, UnauthorizedException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { IntraAuthGuard } from './guards/intra.guard';
import { GoogleAuthGuard } from './guards/google.guard';
import { GithubAuthGuard } from './guards/github.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { TwoFAPinDTO } from './dtos/twofapin.dto';
import { ValidationError } from 'class-validator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  /* ------------------------------------------------------------------------------------------------------------------ */

  @Get('logout')
  async handleLogout(@Res({ passthrough: true }) res) {
    try {
      await res.cookie('access_token', '', { expires: new Date() });
      await res.clearCookie('access_token');
      return res.redirect(`${process.env.CLIENT_URL}/?logged=false`);
    } catch (error) {
      return res.redirect(`${process.env.CLIENT_URL}/?error=true`);
    }
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
    try {
      const isNewUser: boolean = await this.authService.isNewUser(req.user);
      const access_token: string = await this.authService.login(req.user);
      if (!access_token) {
        return res.redirect(`${process.env.CLIENT_URL}/?error=true`);
      }
      await res.clearCookie('access_token');
      await res.cookie('access_token', access_token, this.authService.cookieOptions);
      if (isNewUser) {
        return res.redirect(`${process.env.CLIENT_URL}/profile/settings`);
      } else {
        return res.redirect(`${process.env.CLIENT_URL}/`);
      }
    } catch (error) {
      if (error instanceof UnauthorizedException && error.message === 'Two-factor Authentication Required') {
        const tempToken = await this.authService.issueTemporaryToken(req.user);
        if (!tempToken) {
          return res.redirect(`${process.env.CLIENT_URL}/?error=true`);
        }
        await res.cookie('access_token', tempToken, this.authService.cookieOptions);
        return res.redirect(`${process.env.CLIENT_URL}/2fa/verify`);
      } else {
        return res.redirect(`${process.env.CLIENT_URL}/?error=true`);
      }
    }
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
    try {
      const isNewUser: boolean = await this.authService.isNewUser(req.user);
      const access_token: string = await this.authService.login(req.user);
      if (!access_token) {
        return res.redirect(`${process.env.CLIENT_URL}/?error=true`);
      }
      await res.clearCookie('access_token');
      await res.cookie('access_token', access_token, this.authService.cookieOptions);
      if (isNewUser) {
        return res.redirect(`${process.env.CLIENT_URL}/profile/settings`);
      } else {
        return res.redirect(`${process.env.CLIENT_URL}/`);
      }
    } catch (error) {
      if (error instanceof UnauthorizedException && error.message === 'Two-factor Authentication Required') {
        const tempToken = await this.authService.issueTemporaryToken(req.user);
        if (!tempToken) {
          return res.redirect(`${process.env.CLIENT_URL}/?error=true`);
        }
        await res.cookie('access_token', tempToken, this.authService.cookieOptions);
        return res.redirect(`${process.env.CLIENT_URL}/2fa/verify`);
      } else {
        return res.redirect(`${process.env.CLIENT_URL}/?error=true`);
      }
    }
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
    try {
      const isNewUser: boolean = await this.authService.isNewUser(req.user);
      const access_token: string = await this.authService.login(req.user);
      if (!access_token) {
        return res.redirect(`${process.env.CLIENT_URL}/?error=true`);
      }
      await res.clearCookie('access_token');
      await res.cookie('access_token', access_token, this.authService.cookieOptions);
      if (isNewUser) {
        return res.redirect(`${process.env.CLIENT_URL}/profile/settings`);
      } else {
        return res.redirect(`${process.env.CLIENT_URL}/`);
      }
    } catch (error) {
      if (error instanceof UnauthorizedException && error.message === 'Two-factor Authentication Required') {
        const tempToken = await this.authService.issueTemporaryToken(req.user);
        if (!tempToken) {
          return res.redirect(`${process.env.CLIENT_URL}/?error=true`);
        } else if (req.cookies.access_token) {
          return res.redirect(req.headers.referer);
        }
        await res.cookie('access_token', tempToken, this.authService.cookieOptions);
        return res.redirect(`${process.env.CLIENT_URL}/2fa/verify`);
      } else {
        return res.redirect(`${process.env.CLIENT_URL}/?error=true`);
      }
    }
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  @Put('2fa/enable')
  @UseGuards(JwtAuthGuard)
  async enableTwoFaAuth(@Req() req, @Res() res) {
    try {
      let user: User | null = await this.userService.findUser({ id: req.user.id });
      if (!user) {
        return res.status(400).send('User not found');
      } else if (user.twoFactorEnabled === true) {
        return res.status(400).send('Two-factor authentication already enabled');
      }
      user = await this.userService.updateUserTwoFactorStatus({ id: user.id }, true);
      if (!user) {
        return res.status(500).send('Internal server error');
      }
      const twoFactorOtpAuthUrl = await this.authService.generateTwoFactorOtpAuthUrl(user);
      if (!twoFactorOtpAuthUrl) {
        await this.userService.updateUserTwoFactorStatus({ id: user.id }, false);
        return res.status(500).send('Internal server error');
      }
      const twoFA_QRCode = await this.authService.generateQrCodeDataURL(twoFactorOtpAuthUrl);
      if (!twoFA_QRCode) {
        await this.userService.updateUserTwoFactorStatus({ id: user.id }, false);
        return res.status(500).send('Internal server error');
      }
      const access_token = await this.authService.loginWithTwoFactorAuth(user);
      if (!access_token) {
        await this.userService.updateUserTwoFactorStatus({ id: user.id }, false);
        return res.status(500).send('Cannot re-authenticate user, please try again later');
      }
      await res.clearCookie('access_token');
      await res.cookie('access_token', access_token, this.authService.cookieOptions);
      return res.status(200).json({ qrcode: twoFA_QRCode });
      
    } catch (error) {
      return res.status(500).send('Internal server error');
    }
  }

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
 
  @Put('2fa/disable')
  @UseGuards(JwtAuthGuard)
  async disableTwoFaAuth(@Req() req, @Res() res) {
    try {
      const user: User | null = await this.userService.findUser({
        id: req.user.id,
      });
      if (user === null) {
        return res.status(400).send('User not found');
      } else if (user === undefined) {
        return res.status(500).send('Internal server error');
      } else if (user.twoFactorEnabled === false) {
        return res.status(400).send('Two-factor authentication already disabled');
      }
      await this.userService.updateUserTwoFactorStatus({ id: user.id }, false);
      const access_token = this.authService.login(user);
      if (!access_token) {
        return res.status(500).send('Cannot re-authenticate user, please try again later');
      }
      await res.clearCookie('access_token');
      await res.cookie('access_token', access_token, this.authService.cookieOptions);
      return res.status(200).send('Two-factor authentication disabled');
    } catch (error) {
      return res.status(500).send('Internal server error');
    }
  }

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

  @Post('2fa/verify')
  @UseGuards(JwtAuthGuard)
  async verifyTwoFaAuth(@Req() req, @Res() res) {
    try {
      if (!req.body?.twoFactorAuthCode) {
        return res.status(400).send('Two-factor authentication code not provided');
      }
      const twofaPin: TwoFAPinDTO = { pin: req.body?.twoFactorAuthCode };
      const user: User | null = await this.userService.findUser({ id: req.user.id });
      if (!user) {
        return res.status(400).send('User not found');
      } else if (user.twoFactorEnabled === false) {
        return res.status(400).send('Two-factor authentication not enabled for this user');
      }
      const isTwoFaAuthCodeValid = await this.authService.isTwoFaAuthCodeValid(
        twofaPin.pin,
        user,
      );
      if (isTwoFaAuthCodeValid === false) {
        return res.status(400).send('Invalid two-factor authentication code');
      }
      const access_token = await this.authService.loginWithTwoFactorAuth(user);
      if (!access_token) {
        return res.status(500).send('Cannot re-authenticate user, please try again later');
      }
      await res.clearCookie('access_token');
      await res.cookie('access_token', access_token, this.authService.cookieOptions);
      return res.status(200).send('Two-factor authentication successful');
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(400).send('Invalid two-factor authentication code');
      }
      return res.status(500).send('Internal server error');
    }
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  @Get('user')
  @UseGuards(JwtAuthGuard)
  async getUser(@Req() req, @Res() res) {
    try {
      const user: User | null = await this.userService.findUser({
        id: req.user.id,
      });
      if (!user) {
        return res.status(400).send('User not found');
      }
      const data = {
        userId: user.id,
        username: user.username,
        email: user.email,
        fullname: user.fullname,
        avatarUrl: user.avatarURL,
        isOnline: user.isOnline,
        twoFactorEnabled: user.twoFactorEnabled,
        coalitionName: user.coalitionName,
        accessToken: req.cookies.access_token,
      };
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).send('Internal server error');
    }
  }
}
