import { IsEmail, IsNotEmpty, IsString } from "class-validator";



export class CreateChannelDto {

    @IsEmail()
    @IsNotEmpty()
    readonly channelName: string;

    @IsString()
    @IsNotEmpty()
    readonly type: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;


}

