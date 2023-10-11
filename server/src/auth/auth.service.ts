import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { authenticator } from 'otplib';
import { toDataURL } from 'qrcode';
import { UsersFindDto } from 'src/users/users-find.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  /* ------------------------------------------------------------------------------------------------------------------ */

  cookieOptions = {
    httpOnly: true,
    secure: false, // TODO Later set to true when deploying to production
    sameSite: 'Strict',
    domain: 'localhost', // TODO Later set to process.env.DOMAIN_NAME when deploying to production
    path: '/',
    expires: new Date(Date.now() + 3600000),
    maxAge: 3600000,
  };

  /* ------------------------------------------------------------------------------------------------------------------ */

  async validateUser(userInput: UsersFindDto): Promise<Prisma.UserCreateInput> {
    const userFound = await this.usersService.findUser(userInput);
    if (userFound === null) {
      const userCreated = await this.usersService.createUser(userInput);
      return userCreated;
    }
    return userFound;
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  async login(userInput: UsersFindDto): Promise<string> {
    const user = await this.validateUser(userInput);
    const payload = {
      id: user.id,
    };
    return this.jwtService.sign(payload);
  }

  /* ------------------------------------------------------------------------------------------------------------------ */

  async generateTwoFactorOtpAuthUrl(
    user: Prisma.UserCreateInput,
  ): Promise<string> {
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
    twoFaCode: string,
    user: Prisma.UserCreateInput,
  ): Promise<boolean> {
    return authenticator.verify({
      token: twoFaCode,
      secret: user.twoFaSecret,
    });
  }
}
