import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import { stat } from "fs";
import { ACTION } from "next/dist/client/components/app-router-headers";
import { dash } from "radash";
import { io, Socket } from "socket.io-client";

let userId: number | null = null

function assignuserId() {
    if (userId === null) {
        userId = Math.floor(Math.random() * 3) + 1;
        // console.log(`user ID is: ${userId}`)
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

}


const initialState: ChatSocketState = {
    socket: socket,
}

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