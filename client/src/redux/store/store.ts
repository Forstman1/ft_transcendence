import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import gameReducer from "../slices/game/gameModalSlice";
import authUserReducer from "../slices/authUser/authUserSlice";
import globalSocketReducer  from '../slices/socket/globalSocketSlice';
import mobileReducer from "../slices/Chat/MobileSlice";
import chatSocketReducer from "@/redux/slices/socket/chatSocketSlice";
import chatSlice from '../slices/Chat/ChatSlice'
import userReducer from '../slices/Chat/UserSlice'
// import chatSlice from '../slices/chat/ChatSlice'
// import mobileReducer from "../slices/chat/MobileSlice";

export const store = configureStore({
  reducer: {
    gameReducer,
    globalSocketReducer,
    authUserReducer,
    socket: chatSocketReducer,
    userID: userReducer,
    mobile: mobileReducer,
    chat: chatSlice,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
