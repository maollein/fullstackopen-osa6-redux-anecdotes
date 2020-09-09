import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const getNotification = () => {
    return (
      <div style={style}>
        {props.notification}
      </div>
    )
  }

  return props.notification ? getNotification() : null
}

const mapStateToProps = (state) => {
  return { notification: state.notification.message }
}

export default connect(
  mapStateToProps
)(Notification)