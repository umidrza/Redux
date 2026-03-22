import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useAnecdotes = (url) => {
  const [anecdotes, setAnecdotes] = useState([])
  useEffect(() => {
    axios.get(url).then(response => {
      setAnecdotes(response.data)
    })
  }, [url])
  return anecdotes
}

const App = () => {
  const [counter, setCounter] = useState(0)
  const [values, setValues] = useState([])

  const anecdotes = useAnecdotes(BACKEND_URL)

  const handleClick = () => {
    setCounter(counter + 1)
    setValues(values.concat(counter))
  }

  return (
    <div className="container">
      hello webpack {counter} clicks
      <button onClick={handleClick}>press</button>

      <div>{anecdotes.length} anecdotes on server {BACKEND_URL}</div>
    </div>
  )
}

export default App