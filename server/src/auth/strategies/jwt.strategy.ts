import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
import { UnauthorizedException } from '@nestjs/common';
import { User } from '@prisma/client';
import { authenticator } from 'otplib';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(
    payload: any,
    twoFactorCode: string | null,
  ): Promise<{ id: string }> {
    const user: User = await this.userService.findUser({
      id: payload.id,
    });
    if ((user.twoFactorEnabled && payload.is2FA) || !user.twoFactorEnabled) {
      return { id: payload.id };
    } else if (user.twoFactorEnabled && !twoFactorCode && !payload.is2FA) {
      throw new UnauthorizedException(
        'Two-factor Authentication Code Required',
      );
    } else if (user.twoFactorEnabled && twoFactorCode && !payload.is2FA) {
      const isValid = authenticator.verify({
        token: twoFactorCode,
        secret: user.twoFactorSecret,
      });
      if (!isValid) {
        throw new UnauthorizedException(
          'Invalid Two-factor Authentication Code',
        );
      }
      return { id: payload.id };
    }
  }
}
