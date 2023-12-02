import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class IntraAuthGuard extends AuthGuard('42') {
  constructor() {
    super();
  }

  handleRequest(err: any, user: any, info: any, context: any, status: any) {
    if (err || !user) {
      throw new ServiceUnavailableException(err?.message ? err?.message : '42Intra API is unavailable');
    }
    return user;
  }
}
