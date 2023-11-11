import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";

let playerId: string | null = null;
// let isOnline: boolean = true;

function assignPlayerId() {
  if (playerId === null) {
    const id1 = "18717cab-8acf-412f-ae09-c1d310529c40";
    const id2 = "ba1e3254-5201-4abf-973e-30a10c0ba527";
    playerId = Math.floor(Math.random() * 11) > 5 ? id1 : id2;
    console.log(`Player ID assigned: ${playerId}`);
  }
}


assignPlayerId();

const socket = io("http://localhost:3001", {
  transports: ["websocket"],
  upgrade: false,
  auth: {
    id: playerId,
  },
});

export interface GlobalSocketState {
  socket: Socket | null;
  socketId: string;
  isOwner: boolean;
  roomId: string;
  playerId?: string | null;
}

const initialState: GlobalSocketState = {
  socket: socket,
  socketId: "",
  isOwner: false,
  roomId: "",
  playerId: playerId,
};

socket.emit("createRoomNotification", { userId: playerId }, (data: any) => {

});

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
