import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";

export interface GlobalSocketState {
  socket: Socket | null;
  isOwner: boolean;
  roomId: string;
  friendId?: string | null;
}

const initialState: GlobalSocketState = {
  socket: null,
  isOwner: false,
  roomId: "",
  friendId: "",
};

const globalSocketSlice = createSlice({
  name: "globalSocket",
  initialState,
  reducers: {
    setSocketState: (state, action: PayloadAction<GlobalSocketState>) => {
      return {
        ...state,
        socket: action.payload.socket,
        isOwner: action.payload.isOwner,
        roomId: action.payload.roomId,
        friendId: action.payload.friendId,
      };
    },
    getSocketState: (state) => {
      return state;
    },
  },
});

export const { getSocketState, setSocketState } = globalSocketSlice.actions;

export default globalSocketSlice.reducer;
