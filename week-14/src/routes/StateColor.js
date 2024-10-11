import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StateColor extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         color: 'black'
    //     }
    // }

    state = {
        color: 'black',
        todos: []
    }

    handleClick(newColor) {
        this.setState({color: newColor})
    }

    componentDidMount() {
        console.log('DID Mount')
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => this.setState({todos: data}))
    }

    componentDidUpdate() {
        console.log('DID UPDate')
    }

    componentWillUnmount() {
        console.log('DID UNMOUNT')
    }

  render() {
    return (
      <>
      <div style={{
        width: '10rem',
        height: '10rem',
        backgroundColor: this.state.color
      }}></div>

      <button onClick={() => this.handleClick('red')} >RED</button>
      <button onClick={() => this.handleClick('green')} >GREEN</button>
      <button onClick={() => this.handleClick('black')} >BLACK</button>

      <div>
        <Link to={'/props'}>Props Example</Link>
      </div>

      {this.state.todos.map(todo => <p key={todo.id}>{todo.title}</p>)}

      </>
    )
  }
}
