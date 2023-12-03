import { createSlice } from "@reduxjs/toolkit";


type OptImagesState = {
    optImages: [{ key: string; optImages: [{ src: string; alt: string }] }];
    };


const initialState: OptImagesState = {
    optImages: [{key: "", optImages: [{ src: "", alt: "" }]  }],
};

const OptImagesSlice = createSlice({
    name: "OptImages",
    initialState,
    reducers: {
        setOptAllImages: (state, action) => {
            return {
                ...state,
                optImages: action.payload,
            };
        },
    },
});


export const { setOptAllImages } = OptImagesSlice.actions;
export default OptImagesSlice.reducer;

