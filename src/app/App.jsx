import React, { Component } from 'react';
import './App.css';
import Encrypt from './components/encrypt/Encrypt'
import Decrypt from './components/decrypt/Decrypt'

class App extends Component {
  render() {
    return (
      <div className="App row">
          <div className="col-md-6">
	        <Encrypt />
          </div>
          <div className="col-md-6">
	        <Decrypt />
          </div>
      </div>
    );
  }
}

export default App;
