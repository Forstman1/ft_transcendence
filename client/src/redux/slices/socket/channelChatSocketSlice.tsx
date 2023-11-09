import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import { setChannel, setChannels } from "../chat/ChatSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
// import getUserId from "@/redux/slices/chat/userIdSelector";








const socket = io('http://localhost:3001/channelchat', {
    transports: ['websocket'],
    upgrade: false,
    // auth: {
    //     id: '18717cab-8acf-412f-ae09-c1d310529c40'
    // }
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