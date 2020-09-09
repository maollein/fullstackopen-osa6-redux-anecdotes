import { showNotification, removeNotification } from '../reducers/notificationReducer'

export const notify = (dispatch, message) => {
  dispatch(showNotification(message))
  setTimeout(() => {
    dispatch(removeNotification())
  }, 5000)
}