import { useSelector, useDispatch } from "react-redux";
import {
  incrementGood,
  incrementNeutral,
  incrementBad,
  reset,
} from "./features/feedbackSlice";

function App() {
  const { good, neutral, bad } = useSelector(
    (state) => state.feedback
  );

  const dispatch = useDispatch();

  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;
  const positive = total ? (good / total) * 100 : 0;

  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={() => dispatch(incrementGood())}>good</button>
      <button onClick={() => dispatch(incrementNeutral())}>neutral</button>
      <button onClick={() => dispatch(incrementBad())}>bad</button>
      <button onClick={() => dispatch(reset())}>reset</button>

      <h2>Statistics</h2>

      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <p>good: {good}</p>
          <p>neutral: {neutral}</p>
          <p>bad: {bad}</p>
          <p>total: {total}</p>
          <p>average: {average}</p>
          <p>positive: {positive.toFixed(1)} %</p>
        </>
      )}
    </div>
  );
}

export default App;