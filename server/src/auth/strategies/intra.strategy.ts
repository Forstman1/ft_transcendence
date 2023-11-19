import {
  Injectable,
  ServiceUnavailableException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-42';
import axios from 'axios';
import { UserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class IntraStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      clientID: process.env.INTRA_CLIENT_ID,
      clientSecret: process.env.INTRA_CLIENT_SECRET,
      callbackURL: process.env.INTRA_CALLBACK_URI,
      passReqToCallback: true,
    });
  }

  async getCoalition(
    userid: string,
    accessToken: string,
  ): Promise<{ image_url: string; color: string; name: string }> {
    const url = `https://api.intra.42.fr/v2/users/${userid}/coalitions`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      timeout: 5000,
    });
    if (response.status !== 200 || !response.data[0]) {
      return {
        image_url: undefined,
        color: undefined,
        name: undefined,
      };
    }
    const coalition = response.data[0];
    return {
      image_url: coalition.image_url,
      color: coalition.color,
      name: coalition.name,
    };
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ): Promise<UserDto> {
    try {
      if (!profile || !profile?._json?.login || !profile?._json?.email || !profile?._json?.displayname) {
        throw new ServiceUnavailableException("Couldn't retrieve data from API");
      }
      const coalitionData = await this.getCoalition(
        profile?._json?.id,
        accessToken,
      );
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
        email: profile?._json?.email,
        fullname: profile?._json?.displayname,
        avatarURL: profile?._json?.image?.versions?.large,
        coalitionURL: coalitionData?.image_url,
        coalitionColor: coalitionData?.color,
        coalitionName: coalitionData?.name,
      };
      return user;
    } catch (error) {
      request.res.redirect(encodeURI(process.env.CLIENT_URL + '/?error=true'));
    }
  }
}
