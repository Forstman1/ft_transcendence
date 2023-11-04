import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from "react-redux";
import  gameReducer  from '../slices/game/gameModalSlice';
import globalSocketReducer  from '../slices/socket/globalSocketSlice';
import mobileReducer from "../slices/chat/MobileSlice";
import chatSocketReducer from "@/redux/slices/socket/chatSocketSlice";
import chatSlice from '../slices/chat/ChatSlice'
import userReducer from '../slices/chat/UserSlice'
import channelChatSocketReducer from '../slices/socket/channelChatSocketSlice'

// import chatSlice from '../slices/chat/ChatSlice'
// import mobileReducer from "../slices/chat/MobileSlice";

export const store = configureStore({
  reducer: {
    gameReducer,
    globalSocketReducer,
    socket: chatSocketReducer,
    userID: userReducer,
    mobile: mobileReducer,
    chat: chatSlice,
    channelChatSocket: channelChatSocketReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
