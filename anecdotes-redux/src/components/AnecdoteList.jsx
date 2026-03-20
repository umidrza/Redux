import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdotesReducer";
import { showNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const sortedAnecdotes = anecdotes
    .filter(a =>
      a.content.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => b.votes - a.votes);

  const handleVote = (anecdote) => {
    dispatch(voteAnecdote(anecdote));
    dispatch(showNotification(`You voted '${anecdote.content}'`));
  }

  return (
    <div>
      <h1>Anecdotes</h1>
      {sortedAnecdotes.map(a => (
        <div key={a.id} style={{ marginBottom: "1rem" }}>
          <p>{a.content}</p>
          <p>Has {a.votes} votes</p>
          <button onClick={() => handleVote(a)}>Vote</button>
        </div>
      ))
      }
    </div >
  )
}

export default AnecdoteList