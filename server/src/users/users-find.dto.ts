import { IsString, IsNotEmpty, IsAlphanumeric, IsEmail } from 'class-validator';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersFindDto {
  @IsString()
  @IsAlphanumeric()
  readonly username: string;

  @IsString()
  @IsEmail()
  readonly email: string;
}
