import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { authenticator } from 'otplib';
import { toDataURL } from 'qrcode';
import { UserDto } from 'src/user/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  /* ------------------------------------------------------------------------------------------------------------------ */

  cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 3600000),
    maxAge: 3600000,
  };

  /* ------------------------------------------------------------------------------------------------------------------ */

  async validateUser(userInput: UserDto): Promise<User> {
    const userFound = await this.userService.findUser({
      email: userInput.email,
    });
    if (userFound === null) {
      const userCreated = await this.userService.createUser(userInput);
      return userCreated;
    }
    return userFound;
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  async issueTemporaryToken(userInput: UserDto): Promise<string> {
    const user: User = await this.validateUser(userInput);
    const payload = {
      id: user.id,
      TwoFA_Success: false,
      isTwoFA_Token: true,
    };
    return this.jwtService.sign(payload);
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  async login(userInput: UserDto): Promise<string> {
    const user: User = await this.validateUser(userInput);
    if (user.twoFactorEnabled) {
      throw new UnauthorizedException('Two-factor Authentication Required');
    }
    const payload = {
      id: user.id,
      TwoFA_Success: false,
      isTwoFA_Token: false,
    };
    return this.jwtService.sign(payload);
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  async loginWithTwoFactorAuth(user: User): Promise<string> {
    if (!user.twoFactorEnabled) {
      throw new UnauthorizedException('Two-factor Authentication Disabled');
    }
    const payload = {
      id: user.id,
      TwoFA_Success: true,
      isTwoFA_Token: false,
    };
    return this.jwtService.sign(payload);
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  async generateTwoFactorOtpAuthUrl(user: User): Promise<string> {
    const otpAuthUrl: string = authenticator.keyuri(
      user.email,
      'Pong',
      user.twoFactorSecret,
    );
    return otpAuthUrl;
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  async generateQrCodeDataURL(otpAuthUrl: string): Promise<string> {
    return toDataURL(otpAuthUrl);
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  async isTwoFaAuthCodeValid(
    twoFactorAuthCode: string,
    user: User,
  ): Promise<boolean> {
    return authenticator.verify({
      token: twoFactorAuthCode,
      secret: user.twoFactorSecret,
    });
  }
}
