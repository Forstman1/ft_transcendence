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

export class ChangePassword {



    @IsNotEmpty()
    @IsString()
    channelName:string

    @IsNotEmpty()
    @IsString()
    userId: string

    @IsNotEmpty()
    @IsString()
    currentpassword: string

    @IsNotEmpty()
    @IsString()
    newpassword: string
}

