import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from "react-redux";
import  gameReducer  from '../slices/game/gameModalSlice';
import channelReducer from '../slices/channel/channelSlice';


export const store = configureStore({
    reducer: {
        gameReducer,
        channel: channelReducer,

    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
