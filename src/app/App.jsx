import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import Login from './components/login/Login'
import Footer from './components/footer/Footer'


class App extends Component {
  render() {
    return (
        <div className="viewport">
            <div className="header-view">
                <Nav />
            </div>
            <div className="content-view">
                <Login />
            </div>
            <div className="footer-view">
                <Footer />
            </div>
        </div>
    );
  }
}

export default App;
