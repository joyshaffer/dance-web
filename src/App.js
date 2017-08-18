import React, { Component } from 'react'
import './App.css'
import { Route, Switch, NavLink } from 'react-router-dom'
import BodyPositions from './BodyPositions'
import FeetPosistions from './FeetPositions'

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
            <li>
              <NavLink to="/feet-positions">5 Positions of the Feet and Arms</NavLink>
            </li>
            <li>
              <NavLink to="/arabesques">3 Cecchetti Arabesques</NavLink>
            </li>
            <li>
              <NavLink to="/terms">Terms</NavLink>
            </li>
            <li>
              <NavLink to="/notes">Add your own notes</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/body-positions' component={BodyPositions} />
          <Route path='/feet-positions' component={FeetPosistions} />
          <Route path='/arabesques' render={() => <h1>3 Arabesques</h1>} />
          <Route path='/terms' render={() => <h1>Terms</h1>} />
          <Route path='/notes' render={() => <h1>Notes</h1>} />
          <Route render={() => <p>"Dance is the hidden language of the soul of the body" - Martha Graham</p>} />
        </Switch>
      </div>
    )
  }
}

export default App
