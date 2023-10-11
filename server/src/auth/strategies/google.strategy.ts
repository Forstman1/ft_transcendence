import {
  Injectable,
  ServiceUnavailableException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { generateUsername } from 'unique-username-generator';
import { UsersCreateDto } from 'src/users/users.dto';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URI,
      scope: ['email', 'profile'],
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
      const randomUsername = generateUsername('_', 5);
      const user: UsersCreateDto = {
        username: randomUsername,
        email: profile._json.email,
        fullname: profile._json.displayname,
        avatarURL: profile._json.picture ?? null,
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
