import React, { Component } from 'react';
import './Login.css';
// import * as CryptoJS from 'crypto-js';
import {
    Form,
    InputGroup,
    InputGroupButtonDropdown,
    Input,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';;

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
            <Form onSubmit={this.handleSubmit}>
                <Input className="my-3" type="text" name="encryptInput" id="usernameTextbox" placeholder="Username" value={this.state.value} onChange={this.handleChange} />
                <Input className="my-3" type="text" name="encryptInput" id="passwordTextbox" placeholder="Password" value={this.state.value} onChange={this.handleChange} />

                <InputGroup className="my-3">
                    <Input id="secretTextbox" placeholder="Secret Key" />
                    <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
                        <Button id="secretOpenButton" outline color="warning">Open</Button>
                        <DropdownToggle id="secretDropdown" split outline color="warning"/>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                </InputGroup>

                <Button className="my-3" id="loginButton" outline color="warning" type={"submit"}>Login</Button>
                <Button className="m-3" id="signUpButton" color="link" type={"submit"}>Sign Up</Button>
            </Form>
        );
    }
}

export default Login;