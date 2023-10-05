import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";

let playerId : number | null = null;

function assignPlayerId() {
    if (playerId === null) {
        playerId = Math.floor(Math.random() * 2) + 1;
        console.log(`Player ID assigned: ${playerId}`);
    }
}

assignPlayerId();

export interface GlobalSocketState {
    socket : Socket | null;
    socketId : string;
    isOwner : boolean;
    roomId : string;
    playerId? : number | null;
}

const socket = io('http://localhost:3001', {
    transports: ['websocket'],
    upgrade: false,
});

const initialState : GlobalSocketState = {
    socket,
    socketId : socket.id,
    isOwner : false,
    roomId : "",
    playerId: playerId,
};

socket.emit('addClient', {socketId: socket.id, userId: playerId});

const globalSocketSlice = createSlice({
    name: "globalSocket",
    initialState,
    reducers: {
        setSocketState: (state, action: PayloadAction< GlobalSocketState >) => {
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
        }
    },
});

export const { getSocketState,  setSocketState} = globalSocketSlice.actions;

export default globalSocketSlice.reducer;



