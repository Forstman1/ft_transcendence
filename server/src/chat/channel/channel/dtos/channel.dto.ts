import { IsEmail, IsNotEmpty, IsString } from "class-validator";



export class CreateChannelDto {

    @IsNotEmpty()
    @IsString()
    channelName: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    userId: string;
}

