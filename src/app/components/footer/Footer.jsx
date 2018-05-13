import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <div className="app-footer">
                <div className="p-1 d-flex justify-content-around">
                    Copyright © 2018 mccondochie.com
                </div>
            </div>
        );
    }
}

export default Footer;