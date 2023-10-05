import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { authenticator } from 'otplib';
import { toDataURL } from 'qrcode';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}

  async validateUser(
    userInput: Prisma.UserCreateInput,
  ): Promise<Prisma.UserCreateInput> {
    const userFound = await this.usersService.findUser({
      username: userInput.username,
    });
    if (userFound === null) {
      const userCreated = await this.usersService.createUser(userInput);
      return userCreated;
    }
    return userFound;
  }

  async login(
    user: Prisma.UserCreateInput,
    twoFaSuccess: boolean,
  ): Promise<{ access_token: string }> {
    const userFound = await this.validateUser(user);
    const payload = {
      id: userFound.id,
      username: userFound.username,
      twoFaAuthEnabled: !!userFound.twoFaEnabled,
      twoFaAuthSuccess: twoFaSuccess,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async generateTwoFaOtpAuthUrl(user: Prisma.UserCreateInput): Promise<string> {
    const otpAuthUrl: string = authenticator.keyuri(
      user.email,
      'Pong',
      user.twoFaSecret,
    );
    return otpAuthUrl;
  }

  async generateQrCodeDataURL(otpAuthUrl: string): Promise<string> {
    return toDataURL(otpAuthUrl);
  }

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
