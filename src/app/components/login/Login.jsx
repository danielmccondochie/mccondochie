import React, { Component } from 'react';
import './Login.css';
// import * as CryptoJS from 'crypto-js';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
            dropdownOpen: false,
            splitButtonOpen: false
        };
    }

    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit() {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }

    render() {
        return (
            <div id="app-login" className="d-flex h-100 justify-content-center">
                <div className="row align-self-center">
                    <i id="user-icon" className="d-none d-sm-block fa fa-user-secret"></i>
                    <form id="loginForm" className="form p-1" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <div className="form-row p-1">
                                <div className="col-12">
                                    <input id="username-input" className="form-control" type="text" placeholder="Username" value={this.state.value} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-row p-1">
                                <div className="col-12">
                                    <input id="password-input" className="form-control" type="text" placeholder="Password" value={this.state.value} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-row p-1 text-center">
                                <div className="col-10">
                                    <input id="secret-input" className="form-control" type="text" placeholder="Secret Key" />
                                </div>
                                <div className="col-1">
                                    <button id="load-secret-input" className="btn fa fa-save fa-lg m-1" type="button"> </button>
                                </div>
                            </div>

                        </div>
                        <div className="form-row p-1">
                            <div className="col-6">
                                <button id="login-button" className="btn" type={"submit"}>Login</button>
                            </div>
                            <div className="col-6">
                                <button id="signUp-button" className="btn" type={"submit"}>Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;