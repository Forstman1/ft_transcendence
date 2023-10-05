import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Prisma } from '@prisma/client';
import { Profile, Strategy } from 'passport-42';
import { authenticator } from 'otplib';
import axios from 'axios';

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
    try {
      const url = `https://api.intra.42.fr/v2/users/${userid}/coalitions`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data[0];
    } catch (error) {
      throw error;
    }
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ): Promise<Prisma.UserCreateInput> {
    const coalition = await this.getCoalition(profile._json.id, accessToken);
    const secret = authenticator.generateSecret();
    return {
      intraID: profile._json.id.toString(),
      username: profile._json.login,
      email: profile._json.email,
      fullname: profile._json.displayname,
      avatarURL: profile._json.image.versions.large,
      coalitionURL: coalition.image_url,
      coalitionColor: coalition.color,
      accessToken: accessToken,
      refreshToken: refreshToken,
      twoFaSecret: secret,
    };
  }
}
