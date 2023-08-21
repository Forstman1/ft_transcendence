import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GameModalState {
    mode : string;
    playgroundtheme : {
        id : number;
        playgroundColor : string;
        balColor : string;
    }
    rounds : number;
    matches : number;
}

const initialState : GameModalState = {
    mode : "EASY",
    playgroundtheme : {
        id : 1,
        playgroundColor : "bg-black",
        balColor : "bg-white",
    },
    rounds : 1,
    matches : 1,
}

const gameModalSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
      setModal: (state, action: PayloadAction<GameModalState>) => {
        return {
          ...state,
          mode: action.payload.mode,
          playgroundtheme: { ...action.payload.playgroundtheme },
          rounds: action.payload.rounds,
          matches: action.payload.matches,
        };
      },
      getModal: (state) => {
        return state;
      },
    },
  });
  

export const { setModal, getModal } = gameModalSlice.actions;
export default gameModalSlice.reducer;

