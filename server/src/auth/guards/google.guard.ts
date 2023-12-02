import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  constructor() {
    super();
  }

  handleRequest(err: any, user: any, info: any, context: any, status: any) {
    if (err || !user) {
      throw new ServiceUnavailableException(err?.message ? err?.message : 'Google API is unavailable');
    }
    return user;
  }
}
