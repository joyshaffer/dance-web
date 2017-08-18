import React, { Component } from 'react'
import './App.css'
import { Route, Switch, NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h1>Study For Your Dance Exams!</h1>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/body-positions">Positions of the body</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/body-positions' render={() => <h1>Body Positions</h1>} />
          <Route render={() => <p>"Dance is the hidden language of the soul of the body" - Martha Graham</p>} />
        </Switch>
      </div>
    )
  }
}

export default App
