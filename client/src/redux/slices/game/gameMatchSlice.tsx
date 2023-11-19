import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GameMatchState {
  isOwner: boolean;
  roomId: string;
  opponentId: string;
}

const initialState: GameMatchState = {
  isOwner: false,
  roomId: "",
  opponentId: "",
};

const gameMatchSlice = createSlice({
  name: "gameMatch",
  initialState,
  reducers: {
    setGameMatchState: (state, action: PayloadAction<GameMatchState>) => {
      return {
        ...state,
        isOwner: action.payload.isOwner,
        roomId: action.payload.roomId,
        opponentId: action.payload.opponentId,
      };
    },
    getGameMatchState: (state) => {
        return state;
        },
  },
});

export const { getGameMatchState, setGameMatchState } = gameMatchSlice.actions;

export default gameMatchSlice.reducer;
