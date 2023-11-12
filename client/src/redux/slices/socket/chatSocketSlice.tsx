import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import { stat } from "fs";
import { ACTION } from "next/dist/client/components/app-router-headers";
import { dash } from "radash";
import { io, Socket } from "socket.io-client";

let userId: string | null = null

function assignuserId() {
    if (userId === null) {
        const id1 = "c64e4663-c4cc-44d8-b394-00850891e3fd";
        userId = id1;
        // const id2 = "4a4dcd15-0432-4fe4-8b73-dbab2af36a38";
        // userId = Math.floor(Math.random() * 11) > 5 ? id1 : id2;
        // console.log(`User ID assigned: ${userId}`);
}

}

assignuserId()

const socket = io('http://localhost:3001/chat', {
    transports: ['websocket'],
    auth: {
        id: userId,
    },
})

socket.on('connect', () => {
    console.log('chat user connected')
})

socket.emit(`createRoom`, {userId: userId}, (data: any) => {
    console.log(`the data returned is ` + data)
})

export interface ChatSocketState {
    socket: Socket | null;
    socketId: string;
    roomID: string;
    userID?: string | null;
}


const initialState: ChatSocketState = {
    socket: socket,
    socketId: "",
    roomID: "",
    userID: userId,
}


socket.emit(`createNotificationRoom`, { userId: userId });


const chatSocketSlice = createSlice({
    name: "chatSocket",
    initialState,
    reducers: {
        setSocketState(state, action) {
            state.socket = action.payload;
        },
        getSocketState(state) {
            return state;
        }
    }
})

export const {getSocketState, setSocketState} = chatSocketSlice.actions;
export default chatSocketSlice.reducer;