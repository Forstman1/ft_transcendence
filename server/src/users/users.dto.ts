import { Injectable } from '@nestjs/common';
import {
  IsString,
  IsNotEmpty,
  IsAlphanumeric,
  IsEmail,
  IsUrl,
  IsAlpha,
  IsHexColor,
} from 'class-validator';

@Injectable()
export class UsersDto {
  @IsString()
  @IsNotEmpty()
  @IsAlphanumeric()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  readonly fullname: string;

  @IsString()
  @IsUrl()
  readonly avatarURL: string;

  @IsString()
  @IsUrl()
  readonly coalitionURL: string =
    'https://profile.intra.42.fr/assets/coalitions/factionless-05b8cd65bda8f5eaf56ecf1d16493f41908801cfd66aa97fb27c9611064f4f36.svg';

  @IsString()
  @IsHexColor()
  readonly coalitionColor: string = '#292d39';
}
