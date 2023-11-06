import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";

export interface GlobalSocketState {
  socket: Socket | null;
  socketId: string;
  isOwner: boolean;
  roomId: string;
  playerId?: string | null;
}

const initialState: GlobalSocketState = {
  socket: null,
  socketId: "",
  isOwner: false,
  roomId: "",
  playerId: "",
};

const globalSocketSlice = createSlice({
  name: "globalSocket",
  initialState,
  reducers: {
    setSocketState: (state, action: PayloadAction<GlobalSocketState>) => {
      return {
        ...state,
        socket: action.payload.socket,
        socketId: action.payload.socketId,
        isOwner: action.payload.isOwner,
        roomId: action.payload.roomId,
      };
    },
    getSocketState: (state) => {
      return state;
    },
  },
});

export const { getSocketState, setSocketState } = globalSocketSlice.actions;

export default globalSocketSlice.reducer;
