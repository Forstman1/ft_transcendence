<<<<<<< HEAD
`use client`;
import { configureStore, combineReducers } from "@reduxjs/toolkit";
=======
import { configureStore} from "@reduxjs/toolkit";
>>>>>>> bf26fe93415a48e2bd527d4fb8088e4086d52ff5
import { TypedUseSelectorHook, useSelector } from "react-redux";
import gameReducer from "../slices/game/gameModalSlice";
import authUserReducer from "../slices/authUser/authUserSlice";
import globalSocketReducer  from '../slices/socket/globalSocketSlice';
import mobileReducer from "../slices/chat/MobileSlice";
import chatSocketReducer from "@/redux/slices/socket/chatSocketSlice";
import chatSlice from '../slices/chat/ChatSlice'
// import channelChatSocketReducer from '../slices/socket/channelChatSocketSlice'


export const store = configureStore({
  reducer: {
    gameReducer,
    globalSocketReducer,
    authUser: authUserReducer,
    socket: chatSocketReducer,
    mobile: mobileReducer,
    chat: chatSlice,
    
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
