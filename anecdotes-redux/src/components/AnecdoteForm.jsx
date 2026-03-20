import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdotesReducer";
import { showNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnecdote = inputRef.current.value.trim();
    if (newAnecdote) {
      dispatch(addAnecdote(newAnecdote));
      dispatch(showNotification(`${newAnecdote} Added`))
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h2>Add a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="Enter anecdote" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AnecdoteForm