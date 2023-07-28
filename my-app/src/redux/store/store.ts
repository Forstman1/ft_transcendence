import {configureStore} from '@reduxjs/toolkit'
// import navReducer from '../slices/nav/navSlice'
import { TypedUseSelectorHook, useSelector } from "react-redux";


export const store = configureStore({
    reducer: {
        // nav: navReducer,
        // user: userReducer,
        // auth: authReducer,
        // profile: profileReducer,
        // chat: chatReducer,
        // friends: friendsReducer,
        // settings: settingsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;