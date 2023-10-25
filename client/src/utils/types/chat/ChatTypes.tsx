

export type Channel = {
    id: string;
    name: string;
    type: string;
    channelMembers: ChannelMember[];
};


export type User = {
    id: String
    username: String
    email: String
    fullname: String
    avatar: String
    isOnline: Boolean
}

// export type Message = {
//     id: string;
//     content: string;
//     reciverID: string;
//     authorID: string;
//     authorName: string
//     createdAt: Date;
// }

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

}