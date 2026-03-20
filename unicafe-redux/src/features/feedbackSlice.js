import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    incrementGood: (state) => {
      state.good += 1;
    },
    incrementNeutral: (state) => {
      state.neutral += 1;
    },
    incrementBad: (state) => {
      state.bad += 1;
    },
    reset: () => initialState,
  },
});

export const {
  incrementGood,
  incrementNeutral,
  incrementBad,
  reset,
} = feedbackSlice.actions;

export default feedbackSlice.reducer;