import { createSlice } from "@reduxjs/toolkit";


type user = {
  user: string | null
};

const initialState: user = {
  user: "04dfec00-a05a-4979-ae5b-3001e76841f0",
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