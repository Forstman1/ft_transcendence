import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from "react-redux";
import  gameReducer  from '../slices/game/gameModalSlice';
import chatSlice from '../slices/Chat/ChatSlice';


export const store = configureStore({
    reducer: {
        gameReducer,
        chat: chatSlice,

    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
