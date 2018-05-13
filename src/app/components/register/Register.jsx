import React, { Component } from 'react';
import './Register.css';

class Register extends Component {

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
            <div id="app-register">
                
            </div>
        );
    }
}

export default Register;