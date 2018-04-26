import React, { Component } from 'react';
import './App.css';
import Encrypt from './components/encrypt/Encrypt'
import Decrypt from './components/decrypt/Decrypt'

class App extends Component {
  render() {
    return (
      <div className="App">
	    <Encrypt />
	    <Decrypt />
      </div>
    );
  }
}

export default App;
