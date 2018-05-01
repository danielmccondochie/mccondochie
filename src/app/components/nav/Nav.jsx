import React, { Component } from 'react';
import './Nav.css';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav as nav, NavItem, NavLink } from 'reactstrap';

class Nav extends Component {

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <Button className="fa fa-ellipsis-v fa-lg m-1" id="menuButton" onClick={this.toggleNavbar}> </Button>
                    <NavbarBrand href="/" className="m-auto">reactstrap</NavbarBrand>
                    <Button className="fa fa-cog fa-lg m-1" id="settingsButton" onClick={this.toggleNavbar}> </Button>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <nav navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Nav;