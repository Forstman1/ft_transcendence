import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";

export interface GlobalSocketState {
  socket: Socket | null;
}

const initialState: GlobalSocketState = {
  socket: null,
};

const globalSocketSlice = createSlice({
  name: "globalSocket",
  initialState,
  reducers: {
    setSocketState: (state, action: PayloadAction<GlobalSocketState>) => {
      return {
        ...state,
        socket: action.payload.socket,
      };
    },
    getSocketState: (state) => {
      return state;
    },
  },
});

export const { getSocketState, setSocketState } = globalSocketSlice.actions;

export default globalSocketSlice.reducer;
