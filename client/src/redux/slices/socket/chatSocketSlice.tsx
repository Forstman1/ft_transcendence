import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import { stat } from "fs";
import { ACTION } from "next/dist/client/components/app-router-headers";
import { dash } from "radash";
import { io, Socket } from "socket.io-client";

let userId: string | null = null
// 
// function assignuserId() {
//     if (userId === null) {
//         const id1 = "e188fbcb-b026-43d1-95d4-21c3ec2a42ec";
//         userId = id1;
// }

// }

// assignuserId()

// const socket = io('http://localhost:3001/chat', {
//     transports: ['websocket'],
//     auth: {
//         id: userId,
//     },
// })

// socket.on('connect', () => {
//     console.log('chat user connected')
// })



export interface ChatSocketState {
    socket: Socket | null;
    socketId: string;
    roomID: string;
    userID?: string | null;
}


const initialState: ChatSocketState = {
    socket: null,
    socketId: "",
    roomID: "",
    userID: "",
}


// socket.emit(`createNotificationRoom`, { userId: userId });


const chatSocketSlice = createSlice({
    name: "chatSocket",
    initialState,
    reducers: {
        setChatSocketState(state, action) {
            state.socket = action.payload.socket;
            state.userID = action.payload.userID;
        },
        getChatSocketState(state) {
            return state;
        }
    }
})

export const {getChatSocketState, setChatSocketState} = chatSocketSlice.actions;
export default chatSocketSlice.reducer;