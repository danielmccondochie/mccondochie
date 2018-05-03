import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import Login from './components/login/Login'


class App extends Component {
  render() {
    return (
        <div id="root-container" className="h-100">
            <div id="nav" className="flex-row">
                <Nav />
            </div>
            <div id="content" className="flex-row d-flex align-items-center justify-content-md-start justify-content-sm-center">
                <div className="flex-column">
                    <Login />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
