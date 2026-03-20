import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdotesReducer";
import { showNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes.anecdotes);
  const votes = useSelector(state => state.anecdotes.votes);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const sortedAnecdotes = anecdotes
    .map((text, index) => ({ text, votes: votes[index], index }))
    .filter(a =>
      a.text.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => b.votes - a.votes);

  const handleVote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.index));
    dispatch(showNotification(`You voted '${anecdote.text}'`));
  }

  return (
    <div>
      <h1>Anecdotes</h1>
      {sortedAnecdotes.map(a => (
        <div key={a.index} style={{ marginBottom: "1rem" }}>
          <p>{a.text}</p>
          <p>Has {a.votes} votes</p>
          <button onClick={() => handleVote(a)}>Vote</button>
        </div>
      ))
      }
    </div >
  )
}

export default AnecdoteList