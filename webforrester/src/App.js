import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Patricia Forrester</h1>
          <h2>Full-Stack Web Development</h2>
        </header>
        <div className="app-nav">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
      </div>
    );
  }
}

export default App;
