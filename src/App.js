import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Study For Your Dance Exams!</h3>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to='/body-positions'>Positions of the Body</NavLink>
          </li>
          <li>
            <NavLink to='/feet-positions'>5 Positions of the Feet And Arms</NavLink>
          </li>
          <li>
            <NavLink to='/terms'>Terms</NavLink>
          </li>
          <li>
            <NavLink to='/notes'>Extra Notes</NavLink>
          </li>
        </ul>
        
      </div>
    )
  }
}

export default App
