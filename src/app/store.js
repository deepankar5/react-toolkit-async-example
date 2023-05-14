import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./sampleSlice"


const store = configureStore({
    reducer: {
        posts: sampleReducer
    },
})

export default store