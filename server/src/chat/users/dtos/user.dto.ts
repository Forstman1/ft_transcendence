import { IsNotEmpty, IsString } from "class-validator";

export type user = {
    id:                string
    socketID:          string  
    username:          string      
    email:             string      
    fullname:          string       
    avatar:            string
    isOnline:          Boolean
}

export interface Room {
    id: string
    name: string
    users: user[]
}


export class MessageDto {

    @IsNotEmpty()
    @IsString()
    content: string


    @IsNotEmpty()
    @IsString()
    authorName: string

    @IsNotEmpty()
    @IsString()
    reciverID: string

}
