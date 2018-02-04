export const ADD_MESSAGE = 'ADD_MESSAGE'
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SENDING_MESSAGE = 'SENDING_MESSAGE'
export const SENT_MESSAGE = 'SENT_MESSAGE'

let id = 0
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  id: id++,
  message: message
})

export const updateMessage = (message) => ({
  type: UPDATE_MESSAGE,
  message
})

export const sendMessage = (message) => (dispatch, getState, socket) => {
  console.log('sendMessage:', 'dispatch:', dispatch, 'getState:', getState, 'socket:', socket)
  dispatch(addMessage(message))
  return {
    type: SEND_MESSAGE,
    message: message
  }
}
