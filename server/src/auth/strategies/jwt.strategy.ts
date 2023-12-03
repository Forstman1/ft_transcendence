import {  Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
import { User } from '@prisma/client';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
      passReqToCallback: true,
    });
  }

  private static extractJWT(req): string | null {
    if (
      req.cookies &&
      'access_token' in req.cookies &&
      req.cookies.access_token &&
      req.cookies.access_token.length > 0
    ) {
      return req.cookies.access_token;
    }
    return null;
  }

  async validate(request: Request, payload: any): Promise<{ id: string }> {
    try {
      if (
        payload.isTwoFA_Token && (request.method !== 'POST' ||
        request.url !== '/auth/2fa/verify' || !request.body?.twoFactorAuthCode)
      ) {
        throw new UnauthorizedException('Two-factor Authentication Required');
      }
      const user: User = await this.userService.findUser({
        id: payload.id,
      });
      if (!user) {
        throw new UnauthorizedException('User not found');
      } else if (!payload.isTwoFA_Token && user.twoFactorEnabled && !payload.TwoFA_Success) {
        throw new UnauthorizedException('Two-factor Authentication Required');
      }
      return ({ id: user.id });
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
