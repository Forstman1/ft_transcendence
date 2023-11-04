import { createSlice } from "@reduxjs/toolkit";

let playerId: string | null = null;
// let isOnline: boolean = true;

function assignPlayerId() {
  if (playerId === null) {
    const id1 = "04dfec00-a05a-4979-ae5b-3001e76841f0";
    const id2 = "333804cb-69b1-4fc6-9dd8-7cdc3f9b6c7c";
    const id3 = "3d30a26d-6c8a-4885-9362-e40414a298da";

    
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