import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";

let playerId: number | null = null;

function assignPlayerId() {
  if (playerId === null) {
    playerId = Math.floor(Math.random() * 2) + 1;
    // console.log(`Player ID assigned: ${playerId}`);
  }
}

assignPlayerId();

const socket = io('http://localhost:3001', {
  transports: ['websocket'],
  upgrade: false,
  auth: {
    id: playerId,
  },
});

socket.on('connect', () => {
  // console.log("global socket connected")
})

export interface GlobalSocketState {
  socket: Socket | null;
  socketId: string;
  isOwner: boolean;
  roomId: string;
  playerId?: number | null;
}

const initialState: GlobalSocketState = {
  socket: socket,
  socketId: "",
  isOwner: false,
  roomId: "",
  playerId: playerId,
};

socket.emit("createRoomNotification", { userId: playerId }, (data: any) => {
  console.log("hello: " + data);
});

const globalSocketSlice = createSlice({
  name: "globalSocket",
  initialState,
  reducers: {
    setSocketState: (
      state,
      action: PayloadAction<GlobalSocketState>
    ) => {
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
