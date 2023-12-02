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
    expires: new Date(Date.now() + 86400000), // 1 day
    maxAge: 86400000,
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

  async isNewUser(userInput: UserDto): Promise<boolean> {
    const userFound = await this.userService.findUser({
      email: userInput.email,
    });
    if (userFound === null) {
      return true;
    }
    return false;
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

  async loginAfter2faDisable(user: User): Promise<string> {
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
    if (!otpAuthUrl) {
      throw new Error('Cannot generate Two Factor Auth URL');
    }
    return otpAuthUrl;
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  async generateQrCodeDataURL(otpAuthUrl: string): Promise<string> {
    const qrcode: string = toDataURL(otpAuthUrl)
    if (!qrcode) {
      throw new Error('Cannot generate QR Code');
    }
    return qrcode;
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
