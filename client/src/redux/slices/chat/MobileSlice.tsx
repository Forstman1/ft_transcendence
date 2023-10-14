import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

 const LeftClice = createSlice({
    name: "LeftIsOpen",
    initialState: { LeftValue: false},
    reducers: {
        setLeft: (state, action) => {
            state.LeftValue = action.payload;
        }
    }
})

 const RightClice = createSlice({
     name: "RightClice",
    initialState: { RightValue: false },
    reducers: {
        setRight: (state, action) => {
            state.RightValue = action.payload;
        }
    }
})

 const MidleClice = createSlice({
    name: "MidleButton",
    initialState: { MidleValue: true },
    reducers: {
        setMidle: (state, action) => {
            state.MidleValue = action.payload;
        }
    }
})


const reducers = combineReducers ({
    LeftClice: LeftClice.reducer,
    RightClice: RightClice.reducer,
    MidleClice: MidleClice.reducer,
})

export const { setLeft } = LeftClice.actions
export const { setRight } = RightClice.actions
export const { setMidle } = MidleClice.actions

export default reducers
