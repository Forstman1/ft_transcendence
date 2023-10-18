import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from "react-redux";
import  gameReducer  from '../slices/game/gameModalSlice';
import channelReducer from '../slices/channel/channelSlice';
import globalSocketReducer  from '../slices/socket/globalSocketSlice';
import userReducer from '../slices/chat/chatSlice'
import mobileReducer from "../slices/chat/MobileSlice";
import chatSocketReducer from '../slices/socket/chatSocket';

export const store = configureStore({
  reducer: {
    gameReducer,
    channel: channelReducer,
    userID: userReducer,
    globalSocketReducer,
    chatSocketReducer,
    mobile: mobileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
