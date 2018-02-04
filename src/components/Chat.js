import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { websocketConnected, websocketMessageSent, updateMessage } from '../actions/Chat'

class Chat extends Component {
  static propTypes = {
    message: PropTypes.string,
    messageList: PropTypes.array,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(websocketConnected())
  }

  componentDidUpdate() {
    // document.getElementById('chatBottom' ).scrollIntoView();

  }

  handleChange = event => {
    this.props.dispatch(updateMessage(event.target.value))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch(websocketMessageSent(this.props.message))
  }

  render() {
    const { messageList } = this.props
    const isEmpty = messageList.length === 0
    const divStyle = {
      border: '1px',
      solid: '#ccc',
      overflow: 'auto',
      height: window.innerHeight - 68,
      marginBottom: 18,
    }
    return (
      <div style={{height: '100%'}}>
        {/*<pre itemID="outgoing"/>*/}
        <div style={divStyle} itemID="chat-window">
         {messageList.map((message, id) =>
           <p key={id}>
             {message.message}
           </p>
          )}
          <span style={{visibility: 'hidden'}} itemID="chatBottom"/>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text"
                   className="form-control is-invalid"
                   placeholder="Your message here"
                   onChange={this.handleChange}
                   />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    message,
    messageList
  } = state.messages || {
    message: '',
    messageList: []
  }

  return {
    message,
    messageList
  }
}

export default connect(mapStateToProps)(Chat)
