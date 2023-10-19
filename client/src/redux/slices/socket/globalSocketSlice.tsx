import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";

let playerId: string | null = null;
// let isOnline: boolean = true;

function assignPlayerId() {
  if (playerId === null) {
    const id1 = "537148f8-a8df-4b40-8bb7-4ef10a79b589";
    const id2 = "09de4dba-7621-4a94-8a8b-4bacab200d94";
    playerId = Math.floor(Math.random() * 11) > 5 ? id1 : id2;
    console.log(`Player ID assigned: ${playerId}`);
  }
}

// window.addEventListener("online",() => {
//   isOnline = true;
// }
// );

// window.addEventListener("offline",() => {
//   isOnline = false;
// }
// );

assignPlayerId();

const socket = io('http://localhost:3001', {
  transports: ['websocket'],
  upgrade: false,
  auth: {
    id: playerId,
  },
}
)

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
