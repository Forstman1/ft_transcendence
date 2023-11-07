import { createSlice } from "@reduxjs/toolkit";

let playerId: string | null = null;
// let isOnline: boolean = true;

function assignPlayerId() {
  if (playerId === null) {
    const id1 = "4a4dcd15-0432-4fe4-8b73-dbab2af36a38";
    const id2 = "1eb025a3-15e7-40e0-b39a-a1d09ee82fa9";
    const id3 = "542e94d4-5fa1-4ab3-b7c8-5f3191eae80b";

    
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