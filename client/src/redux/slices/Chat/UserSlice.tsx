import { createSlice } from "@reduxjs/toolkit";

let playerId: string | null = null;
// let isOnline: boolean = true;

function assignPlayerId() {
  if (playerId === null) {
    const id1 = "2e11da2d-deb1-47aa-afef-88197d3648ba";
    const id2 = "2e11da2d-deb1-47aa-afef-88197d3648ba";
    const id3 = "2e11da2d-deb1-47aa-afef-88197d3648ba";

    
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