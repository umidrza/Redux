import { createSlice } from "@reduxjs/toolkit";

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
];

const initialState = {
  anecdotes,
  votes: Array(anecdotes.length).fill(0)
};

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    voteAnecdote(state, action) {
      const index = action.payload;
      state.votes[index]++;
    },
    addAnecdote(state, action) {
      const newAnecdote = action.payload;
      state.anecdotes.push(newAnecdote);
      state.votes.push(0);
    }
  }
});


export const { voteAnecdote, addAnecdote } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;