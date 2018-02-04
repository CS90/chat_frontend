import {
  WEBSOCKET_CONNECTED, WEBSOCKET_MESSAGE_RECEIVED, WEBSOCKET_CLOSE,
  WEBSOCKET_CLOSED, WEBSOCKET_CONNECT, WEBSOCKET_MESSAGE_SENT,
  UPDATE_MESSAGE
} from '../consts/WebSockets'

const messages = (state={
  message: '',
  messageList: []
}, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return Object.assign({}, state, {
        ...state,
        message: action.message
      })
    case WEBSOCKET_MESSAGE_RECEIVED:
      console.log(action)
      return Object.assign({}, state, {
        messageList: [
          ...state.messageList,
          {message: action.message, receivedAt: action.receivedAt}
        ]
      })
    default:
      return state
  }
}

export default messages