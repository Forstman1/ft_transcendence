import { createSlice } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";

let userId: string | null = null

function assignuserId() {
    if (userId === null) {
        const id1 = "515253a4-90d8-474e-8fa7-01ae83c04d20"; 
        const id2 = "56d81659-4dfd-487a-8e63-1ecdb37d752b";
        userId = Math.floor(Math.random() * 11) > 5 ? id1 : id2;
        console.log(`User ID assigned: ${userId}`);
        // userId = id1;
}

}

assignuserId()

const socket = io('http://localhost:3001/chat', {
    transports: ['websocket'],
    auth: {
        id: userId,
    },
})


export interface ChatSocketState {
    socket: Socket | null;
    socketId: string;
    userID?: string | null;
}


const initialState: ChatSocketState = {
    socket: socket,
    socketId: "",
    userID: userId,
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