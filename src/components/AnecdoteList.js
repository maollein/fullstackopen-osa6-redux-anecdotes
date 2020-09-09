import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
    dispatch(setNotification('You voted', 5))
  }

  const getAnecdotesInOrder = (anecdotesToOrder) => {
    anecdotesToOrder.sort((a, b) => b.votes - a.votes)
    return anecdotesToOrder.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )
  }

  const filterAnecdotes = (anecdotesToFilter) => {
    return anecdotesToFilter.filter(a => a.content.toUpperCase().includes(filter.toUpperCase()))
  }

  return getAnecdotesInOrder(filterAnecdotes([...anecdotes]))
}

export default AnecdoteList