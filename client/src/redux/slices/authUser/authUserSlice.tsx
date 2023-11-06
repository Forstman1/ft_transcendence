//userSlice.jsx

"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  avatarUrl: "",
  isOnline: false,
};

export const userSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.username = action.payload?.username
      state.email = action.payload?.email
      state.avatarUrl = action.payload?.avatarUrl
      state.isOnline = action.payload?.isOnline
    }
  },
});

export const { updateUser } = userSlice.actions

export default userSlice.reducer;
