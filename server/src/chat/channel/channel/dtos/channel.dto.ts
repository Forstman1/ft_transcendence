import { IsNotEmpty, IsString } from "class-validator";



export class CreateChannelDto {

    @IsString()
    @IsNotEmpty()
    readonly channelName: string;

    @IsString()
    @IsNotEmpty()
    readonly type: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;


}