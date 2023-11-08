import { createSlice } from "@reduxjs/toolkit";

let playerId: string | null = null;
// let isOnline: boolean = true;

function assignPlayerId() {
  if (playerId === null) {
    const id1 = "b33f65a5-2ccc-4a21-9646-104c2c76b8de";
    const id2 = "d06d1685-8fcb-49af-b4a0-f444f5e029ec";
    const id3 = "d4a9b548-46c6-44d9-9146-ce0ac1231695";

    
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