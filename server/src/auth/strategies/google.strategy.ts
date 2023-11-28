import {
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { UserDto } from 'src/user/user.dto';
import { generateFromEmail } from 'unique-username-generator';
import { UserService } from 'src/user/user.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URI,
      scope: ['email', 'profile'],
      passReqToCallback: true,
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ): Promise<UserDto> {
    try {
      if (!profile || !profile?._json?.email || !profile?._json?.name) {
        throw new ServiceUnavailableException("Couldn't retrieve data from API");
      }
      let generatedUsername: string;
      let usernameExists: boolean = true;
      while (usernameExists) {
        generatedUsername = generateFromEmail(profile?._json?.email, 3);
        const userFound = await this.userService.findUser({
          username: generatedUsername,
        });
        if (!userFound) {
          usernameExists = false;
        }
      }
      const user: UserDto = {
        username: generatedUsername,
        email: profile?._json?.email,
        fullname: profile?._json?.name,
        avatarURL: profile?._json?.picture,
        coalitionURL: undefined,
        coalitionColor: undefined,
        coalitionName: undefined,
      };
      return user;
    } catch (error) {
      return request.res.redirect(`${process.env.CLIENT_URL}/?error=true`);
    }
  }
}
