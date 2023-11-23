import { IsNotEmpty, IsString, IsBoolean, IsOptional, IsDefined, } from 'class-validator';

export class UpdateUserDto {
    
  @IsNotEmpty({ message: 'Full name cannot be empty' })
  @IsString({ message: 'Full name must be a string' })
  fullname: string;

  @IsNotEmpty({ message: 'Username cannot be empty' })
  @IsString({ message: 'Username must be a string' })
  username: string;
  
  @IsNotEmpty({ message: 'Coalition cannot be empty' })
  @IsString({ message: 'Coalition must be a string' })
  coalition: string;
  
  avatar: string;
  
}
