import {
  websocketConnected, websocketMessageReceived,
  websocketClose, websocketMessageSent
} from '../actions/Chat'

import {WEBSOCKET_CONNECT, WEBSOCKET_MESSAGE_SENT} from '../consts/WebSockets'

const socketMiddleware = (function(){
  var socket = null;

  const onOpen = (ws,store) => evt => {
    //Send a handshake, or authenticate with remote end

    //Tell the store we're connected
    // store.dispatch(actions.connected());
    console.log('onOpen:', ws, store)
  }

  const onClose = (ws,store) => evt => {
    console.log('onClose:', ws, store)
    //Tell the store we've disconnected
    // store.dispatch(actions.disconnected());
    console.log('onClose:', evt)
    store.dispatch(websocketConnected())
  }

  const onMessage = (ws,store) => evt => {
    console.log('onMessage:', evt.data)
    store.dispatch(websocketMessageReceived(evt.data))
  }

  return store => next => action => {
    switch(action.type) {

      //The user wants us to connect
      case WEBSOCKET_CONNECT:
        //Start a new connection to the server
        if(socket != null) {
          socket.close()
        }
        //Send an action that shows a "connecting..." status for now
        // store.dispatch(actions.connecting());

        //Attempt to connect (we could send a 'failed' action on error)
        socket = new WebSocket('ws://localhost:8080/')
        socket.onmessage = onMessage(socket,store)
        socket.onclose = onClose(socket,store)
        socket.onopen = onOpen(socket,store)
        console.log('connected:', socket.readyState)
        break

      //The user wants us to disconnect
      case 'DISCONNECT':
        if(socket != null) {
          socket.close()
        }
        socket = null

        //Set our state to disconnected
        // store.dispatch(actions.disconnected());
        break

      //Send the 'SEND_MESSAGE' action down the websocket to the server
      case 'WEBSOCKET_MESSAGE_SENT':
        console.log('WEBSOCKET_MESSAGE_SENT:', action)
        socket.send(JSON.stringify(action))
        break

      //This action is irrelevant to us, pass it on to the next middleware
      default:
        return next(action)
    }
  }

})()

export default socketMiddleware
