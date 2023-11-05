import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
import { UnauthorizedException } from '@nestjs/common';
import { User } from '@prisma/client';

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

  async validate(payload: any): Promise<{ id: string }> {
    const user: User = await this.userService.findUser({
      id: payload.id,
    });
    if (user.twoFactorEnabled && !payload.twoFASuccess) {
      throw new UnauthorizedException('Two-factor Authentication Required');
    }
    return { id: payload.id };
  }
}
