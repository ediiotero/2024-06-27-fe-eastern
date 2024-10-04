import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/#">Navbar</a>
        </div>
      </nav>
    )
  }
}
