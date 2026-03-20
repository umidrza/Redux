import { configureStore } from "@reduxjs/toolkit";
import anecdotesReducer from "./anecdotesSlice";

const store = configureStore({
    reducer: {
        anecdotes: anecdotesReducer
    }
});

export default store;