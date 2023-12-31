import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";


export interface ChatSocketState {
    socket: Socket | null;
    userID?: string | null;
}

const initialState: ChatSocketState = {
    socket: null,
    userID: "",
}

const chatSocketSlice = createSlice({
    name: "chatSocket",
    initialState,
    reducers: {
        setChatSocketState: (state, action: PayloadAction<ChatSocketState>) => {
            return {
                ...state,
                socket: action.payload.socket,
                userID: action.payload.userID,
            };
        },
        getChatSocketState: (state) => {
            return state;
        }
    }
})

export const { getChatSocketState, setChatSocketState } = chatSocketSlice.actions;
export default chatSocketSlice.reducer;