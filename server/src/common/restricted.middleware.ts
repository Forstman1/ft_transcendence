import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Response, NextFunction } from 'express';

@Injectable()
export class RestrictedMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: NextFunction) {
    if (
      req._parsedUrl.pathname !== '/auth/google/callback' &&
      req._parsedUrl.pathname !== '/auth/intra/callback' &&
      req._parsedUrl.pathname !== '/auth/github/callback' &&
      req.headers.referer !== `${process.env.CLIENT_URL}/`
    ) {
      throw new UnauthorizedException();
    }
    next();
  }
}
