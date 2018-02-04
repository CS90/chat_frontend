import { combineReducers } from 'redux'
import messages from './chat'

const chat = combineReducers({
  messages
})

export default chat
