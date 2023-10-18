import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { ACTION } from "next/dist/client/components/app-router-headers";
import { io, Socket } from "socket.io-client";


const socket = io('http://localhost:3001', {
    transports: ['websocket']
})
socket.on('connect', () => {
    console.log('chat user connected')
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