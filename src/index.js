import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

// App
import App from './containers/App'

// Reducer
import reducer from './reducers'

// Middleware
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
// import {websocket} from './middleware/WebSockets'

// Styles
import 'bootstrap/dist/css/bootstrap.css'
// import './assets/styles/index.css'
import './assets/styles/dashboard.css'
import socketMiddleware from './middleware/WebSockets'
// import webRTCMiddleware from './middleware/WebRTC'

// let socket = WebSocket

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const enhancer = composeEnhancers(
  // applyMiddleware(thunkMiddleware, logger, websocketMiddleware(socket)),
  applyMiddleware(thunkMiddleware, logger, socketMiddleware),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
