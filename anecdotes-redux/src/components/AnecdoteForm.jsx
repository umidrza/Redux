import { useDispatch } from "react-redux";
import { appendAnecdote } from "../reducers/anecdotesReducer";
import { showNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    dispatch(appendAnecdote(content));
    dispatch(showNotification(`${content} Added`));
    event.target.anecdote.value = '';
  };

  return (
    <div>
      <h2>Add a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <input name="anecdote" placeholder="Enter anecdote" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AnecdoteForm