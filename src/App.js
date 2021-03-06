import React, { Component } from 'react';
import CommentBox from './Comments/CommentBox'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">
          To get started, edit <code>src/app.js</code> and save to reload.
        </p>
        <CommentBox />
      </div>
    ); 
  }
}

export default App;
