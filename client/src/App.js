import React, { Component } from 'react';
import Canvas from './components/Canvas/'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./pages/Auth";
import Game from "./pages/Game"
import './App.css';

class App extends Component {
  render() {
    return (
      
      <Router>
        <>
        <Route exact path="/" render={(props) => <Auth {...props} action="login"/>} />
        <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
        <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
        <Route exact path="/game" Component={Game} />
        </>
      </Router>
    
      
    );
  }
}

export default App;
