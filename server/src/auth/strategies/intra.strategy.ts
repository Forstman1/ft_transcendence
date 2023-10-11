import {
  Injectable,
  ServiceUnavailableException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-42';
import axios from 'axios';
import { UsersCreateDto } from 'src/users/users.dto';

@Injectable()
export class IntraStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.INTRA_CLIENT_ID,
      clientSecret: process.env.INTRA_CLIENT_SECRET,
      callbackURL: process.env.INTRA_CALLBACK_URI,
    });
  }

  async getCoalition(userid: string, accessToken): Promise<any> {
    const url = `https://api.intra.42.fr/v2/users/${userid}/coalitions`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data[0] ?? null;
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
      const coalition = await this.getCoalition(profile._json.id, accessToken);
      const user: UsersCreateDto = {
        username: profile._json.login,
        email: profile._json.email,
        fullname: profile._json.displayname,
        avatarURL: profile._json.image.versions.large,
        coalitionURL: coalition.image_url,
        coalitionColor: coalition.color,
      };
      return user;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
