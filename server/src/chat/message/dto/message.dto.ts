import { IsNotEmpty, IsString } from "class-validator"



export class CreateMessageDto {

    @IsNotEmpty()
    @IsString()
    content: string


    @IsNotEmpty()
    @IsString()
    userId: string

    @IsNotEmpty()
    @IsString()
    reciverId: string

}
