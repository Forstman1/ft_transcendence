

export type Channel = {
    id: string;
    name: string;
    type: string;
};

export type Message = {
    id: string;
    content: string;
    reciverID: string;
    authorID: string;
    authorName: string
    createdAt: Date;
}

export type User = {
    id:                String       
    username:          String      
    email:             String      
    fullname:          String       
    avatar:            String
    isOnline:          Boolean
}