import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import Login from './components/login/Login'
import Footer from './components/footer/Footer'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false, content: undefined};
        this.setContent = this.setContent.bind(this);
    }

    setContent(content) {
        this.setState({content: content})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let content = isLoggedIn ? (
            <h1>hello</h1>
        ) : (
            <Login />
        )

        return (
            <div className="viewport">
                <div className="header-view">
                    <Nav />
                </div>
                <div className="content-view">
                    {content}
                </div>
                <div className="footer-view">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
