import { Injectable } from '@nestjs/common';
import {
  IsString,
  IsNotEmpty,
  IsAlphanumeric,
  IsEmail,
  IsUrl,
  IsAlpha,
  IsHexColor,
  IsOptional,
} from 'class-validator';

@Injectable()
export class UserDto {
  @IsString()
  @IsNotEmpty()
  @IsAlphanumeric()
  @IsOptional()
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
  @IsOptional()
  readonly avatarURL: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  readonly coalitionURL: string;

  @IsString()
  @IsHexColor()
  @IsOptional()
  readonly coalitionColor: string;

  @IsString()
  @IsAlpha()
  @IsOptional()
  readonly coalitionName: string;
}
