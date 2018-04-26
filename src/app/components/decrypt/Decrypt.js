import React, { Component } from 'react';
import './Decrypt.css';

import * as CryptoJS from 'crypto-js';

class Decrypt extends Component {

constructor(props) {
    super(props);
    this.state = {value: '', result: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({result: this.decrypt(this.state.value)});
    event.preventDefault();
  }

  decrypt(value) {
    return CryptoJS.AES.decrypt(this.state.value, "test").toString(CryptoJS.enc.Utf8)
  }

  render() {
    return (
        <div className='decrypt'>
            <form onSubmit={this.handleSubmit}>
                <label>
                  Name:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <textarea value={this.state.result}></textarea>
        </div>
    );
  }
}

export default Decrypt;