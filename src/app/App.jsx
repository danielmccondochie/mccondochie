import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Footer from './components/footer/Footer'
import { Provider } from "react-redux";
import store from "./Store";
import { addUser } from "./actions/UserActions";



class App extends Component {

    constructor(props) {
        super(props);
        this.store = store;
        this.addUser = addUser;
        this.state = {isLoggedIn: false, content: undefined};
        this.setContent = this.setContent.bind(this);
    }

    setContent(content) {
        this.setState({content: content})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let content = isLoggedIn ? (
            <Login />
        ) : (
            <Register />
        )

        return (
            <Provider store={store}>
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
            </Provider>
        );
    }
}

export default App;
