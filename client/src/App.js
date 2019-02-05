import React, { Component } from 'react';
import Canvas from './components/Canvas/'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./pages/Auth";
import Game from "./pages/Game"
import './App.css';
import SelectCharacter from './components/characterSelect';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Canvas />
          <Route exact path="/characters" component={SelectCharacter} />
        </div>
      </Router>
    );
  }
}

export default App;
