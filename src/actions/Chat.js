import {
  WEBSOCKET_MESSAGE_SENT, WEBSOCKET_CONNECT,
  WEBSOCKET_CLOSED, WEBSOCKET_CLOSE,
  WEBSOCKET_MESSAGE_RECEIVED, WEBSOCKET_CONNECTED,
  UPDATE_MESSAGE
} from '../consts/WebSockets'

export const websocketConnected = () => ({
  type: WEBSOCKET_CONNECT,
  connectedAt: Date.now()
})

export const websocketClose = () => ({
    type: WEBSOCKET_CLOSE,
    closedAt: Date.now()
})

export const websocketMessageReceived = (message) => ({
  type: WEBSOCKET_MESSAGE_RECEIVED,
  receivedAt: Date.now(),
  message
})

export const websocketMessageSent = (message) => ({
  type: WEBSOCKET_MESSAGE_SENT,
  sentAt: Date.now(),
  message
})

export const updateMessage = (message) => ({
  type: UPDATE_MESSAGE,
  message
})
