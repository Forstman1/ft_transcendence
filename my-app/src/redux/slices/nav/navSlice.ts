import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NavState = {
    value: {
        pressLink: string
    }
}

const initialState = {
    value: {
        pressLink: '',
    }
} as NavState

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setNav: (state, action: PayloadAction<string>) => {
            state.value.pressLink = action.payload
        }
    }
})

export const { setNav} = navSlice.actions
export default navSlice.reducer