`use client`;
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from "react-redux";
import  gameReducer  from '../slices/game/gameModalSlice';
import globalSocketReducer  from '../slices/socket/globalSocketSlice';
import mobileReducer from "../slices/chat/MobileSlice";
import chatSocketReducer from "@/redux/slices/socket/chatSocketSlice";
import chatSlice from '../slices/chat/ChatSlice'
import OptImagesSlice from '../slices/chat/OptImagesSlice';
// import channelChatSocketReducer from '../slices/socket/channelChatSocketSlice'

// import chatSlice from '../slices/chat/ChatSlice'
// import mobileReducer from "../slices/chat/MobileSlice";

export const store = configureStore({
  reducer: {
    gameReducer,
    globalSocketReducer,
    socket: chatSocketReducer,
    mobile: mobileReducer,
    chat: chatSlice,
    optImages: OptImagesSlice,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
