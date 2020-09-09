import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE_ANECDOTE':
      return state.map(anecdote => {
        if (anecdote.id === action.data.anecdote.id)
          return action.data.anecdote
        else
          return anecdote
      })
    case 'ADD_ANECDOTE':
      return [...state, action.data.anecdote]
    case 'INIT_ANECDOTES':
      return action.data.anecdotes
    default:
      return state
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const updated = await anecdoteService.updateAnecdote({...anecdote, votes: anecdote.votes + 1})
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: {
        anecdote: updated
      }
    })
  }
}

export const addAnecdote = (anecdoteToAdd) => {
  return async dispatch => {
    const anecdote = await anecdoteService.postAnecdote(anecdoteToAdd)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: {
        anecdote
      }
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAnecdotes()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: {
        anecdotes
      }
    })
  }
}

export default reducer