import { createSlice } from "@reduxjs/toolkit";

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const anecdote = action.payload;
      anecdote.votes++;
    },
    addAnecdote(state, action) {
      const newAnecdote = action.payload;
      state.anecdotes.push({ content: newAnecdote, votes: 0 });
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
});


export const { voteAnecdote, addAnecdote, setAnecdotes } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;