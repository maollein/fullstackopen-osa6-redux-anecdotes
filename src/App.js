import React, { useEffect } from 'react'
import AddAnecdoteForm from './components/AddAnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import { initAnecdotes } from './reducers/anecdoteReducer'

const App = () => {

const dispatch = useDispatch()

useEffect(() => {
  dispatch(initAnecdotes())
}, [dispatch])

return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AddAnecdoteForm />
    </div>
  )
}

export default App