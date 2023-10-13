import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

const userSlice = createSlice({
  name : "user",
  initialState: {
    user: null
  },
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