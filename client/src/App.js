import React, { Component } from 'react';
import Canvas from './components/Canvas/'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./pages/Auth";
import Game from "./pages/Game"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Canvas/>
      </div>
    );
  }
}

export default App;
