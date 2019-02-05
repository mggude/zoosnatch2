import React, { Component } from 'react';
import Canvas from './components/Canvas/'
import Bandersnatch from "./components/Bandersnatch";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Bandersnatch />
      </div>
    );
  }
}

export default App;
