import { createSlice } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";

let userId: string | null = null

function assignuserId() {
    if (userId === null) {
        const id1 = "06b25f1c-12bb-44b6-8ae0-470d9745e317"; 
        const id2 = "318708af-f9dc-4264-aeac-46f8b8fa3990";
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