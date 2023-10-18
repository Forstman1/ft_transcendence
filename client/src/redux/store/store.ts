import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from "react-redux";
import  gameReducer  from '../slices/game/gameModalSlice';

import globalSocketReducer  from '../slices/socket/globalSocketSlice';
import chatSlice from '../slices/Chat/ChatSlice'
import mobileReducer from "../slices/Chat/MobileSlice";

export const store = configureStore({
  reducer: {
    gameReducer,
    // userID: userReducer,
    globalSocketReducer,
    mobile: mobileReducer,  
    chat: chatSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
