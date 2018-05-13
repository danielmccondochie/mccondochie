import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {

    constructor(props) {
        super(props);

        this.toggleMenubar = this.toggleMenubar.bind(this);
        this.toggleSettingsbar = this.toggleSettingsbar.bind(this);
        this.state = {
            menuCollapsed: true,
            settingsCollapsed: true
        };
    }

    toggleMenubar() {

        if (this.state.settingsCollapsed === false) {
            this.setState({
                settingsCollapsed: !this.state.settingsCollapsed,
                menuCollapsed: !this.state.menuCollapsed
            });
        } else {
            this.setState({
                menuCollapsed: !this.state.menuCollapsed
            });
        }
    }

    toggleSettingsbar() {

        if (this.state.menuCollapsed === false) {
            this.setState({
                menuCollapsed: !this.state.menuCollapsed,
                settingsCollapsed: !this.state.settingsCollapsed
            });
        } else {
            this.setState({
                settingsCollapsed: !this.state.settingsCollapsed
            });
        }
    }

    render() {
        return (
            <div id="appnav">
                <nav className="navbar d-flex justify-content-between bg-light navbar-fixed-top">
                    <button id="menuButton" className="btn fa fa-user fa-lg" type="button" onClick={this.toggleMenubar}> </button>
                    <a id="app-brand" className="navbar-brand" href="#">mccondochie</a>
                    <button id="settingsButton" className="btn fa fa-cog fa-lg" type="button" onClick={this.toggleSettingsbar}> </button>
                </nav>
            </div>
        );
    }
}

export default Nav;