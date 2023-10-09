

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