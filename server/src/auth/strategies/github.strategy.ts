import {
  Injectable,
  ServiceUnavailableException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-github2';
import { UsersCreateDto } from 'src/users/users.dto';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_REDIRECT_URL,
      scope: ['read:user'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ): Promise<UsersCreateDto> {
    if (!profile) {
      throw new ServiceUnavailableException("Couldn't retrieve data from API");
    }
    try {
      const user: UsersCreateDto = {
        username: profile._json.login,
        email: profile._json.email,
        fullname: profile.displayName,
        avatarURL: profile._json.avatar_url ?? null,
        coalitionURL: null,
        coalitionColor: null,
      };
      return user;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
