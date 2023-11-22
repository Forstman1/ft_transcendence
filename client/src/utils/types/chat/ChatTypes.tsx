

export type Channel = {
    id: string;
    name: string;
    type: string;
    channelMember: ChannelMember[];
};


export type User = {
    id:                string
    socketID:          string  
    username:          string      
    email:             string      
    fullname:          string       
    avatar:            string
    isOnline:          Boolean
}


export type UserMessage = {
    id: string;
    content: string;
    reciverID: string;
    authorID: string;
    roomID: string;
    authorName: string
    createdAt: Date;
}

export type ChannelMessage = {
    id: string
    content: string
    reciverID: string
    authorID: string
    authorName: string
    createdAt: Date
}


export type ChannelMember = {

    id: string
    channelId: string
    userId: string
    role: string
    createdAt: Date
    user: User
    isMuted: Boolean

}
