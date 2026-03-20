import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from '../services/anecdotes'

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    incrementVote(state, action) {
      const id = action.payload.id;
      const anecdote = state.find(a => a.id === id);
      if (anecdote) {
        anecdote.votes++;
      }
    },
    addAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
});

const { setAnecdotes, addAnecdote, incrementVote } = anecdotesSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  }
}

export const appendAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew({ content, vote: 0 });
    dispatch(addAnecdote(newAnecdote));
  }
}

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    };

    dispatch(incrementVote({ id: anecdote.id }));

    try {
      await anecdoteService.update(anecdote.id, updatedAnecdote);
    } catch (error) {
      console.error('Failed to update anecdote:', error);
    }
  }
}

export default anecdotesSlice.reducer;