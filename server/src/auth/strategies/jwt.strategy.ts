import { ForbiddenException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
import { UnauthorizedException } from '@nestjs/common';
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
    if (payload.isTwoFA_Token &&
      (request.method !== 'POST'
      || request.url !== '/auth/2fa/verify'
      || request.body?.twoFactorAuthCode === undefined)
      ) {
      throw new UnauthorizedException('Two-factor Authentication Required');
    }
    const user: User = await this.userService.findUser({
      id: payload.id,
    });
    if (!payload.isTwoFA_Token && user.twoFactorEnabled && !payload.TwoFA_Success) {
      throw new ForbiddenException('Two-factor Authentication Requiregggd');
    }
    return ({ id: user.id });
  }
}
