import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../anecdotesSlice";

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes.anecdotes);
  const votes = useSelector(state => state.anecdotes.votes);

  const dispatch = useDispatch();

  const sortedAnecdotes = anecdotes
    .map((text, index) => ({ text, votes: votes[index], index }))
    .sort((a, b) => b.votes - a.votes);

  return (
    <div>
      <h1>Anecdotes</h1>
      {sortedAnecdotes.map(a => (
        <div key={a.index} style={{ marginBottom: "1rem" }}>
          <p>{a.text}</p>
          <p>Has {a.votes} votes</p>
          <button onClick={() => dispatch(voteAnecdote(a.index))}>Vote</button>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList