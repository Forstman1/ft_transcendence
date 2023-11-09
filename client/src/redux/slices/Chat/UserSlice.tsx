import { createSlice } from "@reduxjs/toolkit";

let playerId: string | null = null;
// let isOnline: boolean = true;

function assignPlayerId() {
  if (playerId === null) {
    const id1 = "4c38b916-a464-481f-96a8-587cb28de6eb";
    const id2 = "c7566792-9cb4-434b-a409-1eee07c4a0cb";
    const id3 = "f7abd0f1-dca6-490c-ae5f-34b3f9559a5b";

    
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      playerId = id1;
    } else if (randomNumber === 1) {
      playerId = id2;
    } else {
      playerId = id3;
    }
    console.log(`user ID assigned: ${playerId}`);
  }
}

assignPlayerId()

type user = {
  user: string | null
};

const initialState: user = {
  user: playerId,
};


const userSlice = createSlice({
  name : "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearuser: (state) => {
      state.user = null;
    }
  }
});

export const {setUser, clearuser} = userSlice.actions;
export default  userSlice.reducer;