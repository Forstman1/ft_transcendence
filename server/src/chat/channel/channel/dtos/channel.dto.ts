import { IsEmail, IsNotEmpty, IsString } from "class-validator";



export class CreateChannelDto {

    @IsNotEmpty()
    @IsString()
    readonly channelName: string;

    @IsString()
    @IsNotEmpty()
    readonly type: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @IsString()
    @IsNotEmpty()
    readonly userId: string;
}

