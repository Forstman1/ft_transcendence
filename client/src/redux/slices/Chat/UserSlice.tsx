import { createSlice } from "@reduxjs/toolkit";

let playerId: string | null = null;
// let isOnline: boolean = true;

function assignPlayerId() {
  if (playerId === null) {
    const id1 = "017f0e35-e3ef-4f1c-82df-2963ed430e67";
    const id2 = "7b71c1b5-49a4-4c2f-8bd7-cb0bcbc87398";
    playerId = Math.floor(Math.random() * 11) > 5 ? id1 : id2;
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