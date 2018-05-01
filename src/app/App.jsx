import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import Login from './components/login/Login'


class App extends Component {
  render() {
    return (
        <div className="h-100">
            <div id="nav">
                <Nav />
            </div>
            <div id="content" className="m-auto col-md-4 d-flex align-items-center flex-column justify-content-center">
                <Login />
            </div>
        </div>
    );
  }
}

export default App;
