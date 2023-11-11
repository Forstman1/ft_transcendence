import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import { stat } from "fs";
import { ACTION } from "next/dist/client/components/app-router-headers";
import { dash } from "radash";
import { io, Socket } from "socket.io-client";

let userId: string | null = null

function assignuserId() {
    if (userId === null) {
        const id1 = "515253a4-90d8-474e-8fa7-01ae83c04d20"; 
        const id2 = "56d81659-4dfd-487a-8e63-1ecdb37d752b";
        // userId = id1;
        userId = Math.floor(Math.random() * 11) > 5 ? id1 : id2;
        console.log(`User ID assigned: ${userId}`);
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

// socket.emit(`createRoom`, {userId: userId}, (data: any) => {
    
// })

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


// socket.emit(`createNotificationRoom`, { userId: userId });


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