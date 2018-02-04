import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="/">Stuff here</a>
          </li>
        </ul>

        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link" href="/">Second Stuffs</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
