import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from "./Component/Board/Board";
import Game from "./Component/Game/Game";
import Square from "./Component/Square/Square";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Board /> */}
        <Game />
        <Square/>
      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React Tutorial Game</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

    );
  }
}

export default App;
