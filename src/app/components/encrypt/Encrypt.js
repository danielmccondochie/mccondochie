import React, { Component } from 'react';
import './Encrypt.css';
import * as CryptoJS from 'crypto-js';

class Encrypt extends Component {

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
    this.setState({result: this.encrypt(this.state.value)});
    event.preventDefault();
  }

  encrypt(value) {
    return CryptoJS.AES.encrypt(value, "test")
  }

  render() {
    return (
        <div className='encrypt'>
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

export default Encrypt;