export interface Users {
    userID: string
    userName: string
    socketID: string
}

export interface Room {
    name: string
    host: Users
    users: Users[]
}

export interface Message {
    user: Users
    room: Room
    sendTime: string
    message: string
}

// export interface ServerToClien {
//     chat: (content: messge) => void
// }


// export interface ClinetToServer {
//     chat: (content: messge) => void
//     joinRoom: (e: {user: User, room:string}) => void
// }