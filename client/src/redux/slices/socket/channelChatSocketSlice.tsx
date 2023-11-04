import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import { setChannel, setChannels } from "../chat/ChatSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";




const socket = io('http://localhost:3001/channelchat', {
    transports: ['websocket'],
})

socket.on('connect', () => {
    console.log('chat user connected')
})



export interface ChannelChatSocketState {
    socket: Socket | null;
}


const initialState: ChannelChatSocketState = {
    socket: socket,
}

const channelChatSocketState = createSlice({
    name: "ChannelChatSocket",
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

export const {getSocketState, setSocketState} = channelChatSocketState.actions;
export default channelChatSocketState.reducer;