const notificationReducer = (state = {message: '', timeout: null}, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return { ...state, message: action.data.message }
    case 'REMOVE_NOTIFICATION':
      return { ...state, message: ''}
    case 'ADD_TIMEOUT':
      return { ...state, timeout: action.data.timeoutId }
    case 'REMOVE_TIMEOUT':
      return { ...state, timeout: null }
    default:
      return state
  }
}

export const addTimeout = (id) => {
  return {
    type: 'ADD_TIMEOUT',
    data: {
      timeoutId: id
    }
  }
}

export const removeTimeout = () => {
  return {
    type: 'REMOVE_TIMEOUT'
  }
}

export const showNotification = (message) => {
  return {
    type: 'SHOW_NOTIFICATION',
    data: {
      message
    }
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}

export const setNotification = (message, time) => {
  return async (dispatch, getState) => {
    const timeoutId = getState().notification.timeout
    if (timeoutId) {
      clearTimeout(timeoutId)
      dispatch(removeTimeout())
    }
    dispatch({
      type: 'SHOW_NOTIFICATION',
      data: {
        message
      }
    })
    const id = setTimeout(() => {
      dispatch({type: 'REMOVE_NOTIFICATION'})
      dispatch(removeTimeout())
    }, time * 1000);
    dispatch(addTimeout(id))
  }
}

export default notificationReducer