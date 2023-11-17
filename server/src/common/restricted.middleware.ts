import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RestrictedMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers.referer !== 'http://localhost:3000/') {
      res.status(401).send('Not Authorized');
    }
    next();
  }
}