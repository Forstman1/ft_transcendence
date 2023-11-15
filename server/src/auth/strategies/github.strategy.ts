import {
  Injectable,
  ServiceUnavailableException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-github2';
import { UserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_REDIRECT_URL,
      scope: ['user'],
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
      if (!profile || !profile?._json?.login || !profile?.emails[0]?.value || !profile?.displayName) {
        throw new ServiceUnavailableException("Couldn't retrieve data from API");
      }
      let generatedUsername: string = profile?._json?.login;
      let usernameExists: boolean = true;
      while (usernameExists) {
        const userFound = await this.userService.findUser({
          username: generatedUsername,
        });
        if (!userFound) {
          usernameExists = false;
          break;
        }
        generatedUsername += Math.random().toString(36)[2];
      }

      const user: UserDto = {
        username: generatedUsername,
        email: profile?.emails[0]?.value,
        fullname: profile?.displayName,
        avatarURL: profile?._json?.avatar_url,
        coalitionURL: undefined,
        coalitionColor: undefined,
        coalitionName: undefined,
      };
      return user;
    } catch (error) {
      request.res.redirect(encodeURI(process.env.CLIENT_URL + '/?error=true'));
    }
  }
}
