import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AddAnecdoteForm = (props) => {

  const addNewAnecdote = async (e) => {
    e.preventDefault();
    const anecdote = {
      content: e.target.anecdote.value,
      votes: 0
    }
    e.target.anecdote.value = ''
    props.addAnecdote(anecdote)
    props.setNotification('New anecdote added', 5)
  }

  return (
    <form onSubmit={addNewAnecdote}>
      <input name='anecdote' />
      <button type='submit'>add</button>
    </form>
  )
}

const mapDispatchToProps = {
  addAnecdote,
  setNotification
}

export default connect(
  null,
  mapDispatchToProps
)(AddAnecdoteForm)