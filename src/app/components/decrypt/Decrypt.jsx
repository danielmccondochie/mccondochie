import React, { Component } from 'react';
import './Decrypt.css';
import { Label, Form, Input, Button } from 'reactstrap';

import * as CryptoJS from 'crypto-js';

class Decrypt extends Component {

constructor(props) {
    super(props);
    this.state = {value: '', result: ''};

    this.key = "MIICWgIBAAKBgEu4y1FpZ4KxPSHZ3cpHjkRo7Svy/5Psa7O7Cgpo1Ol3EAEBzkWp\n" +
        "viIzlW/Y+vQJU8Zs2G+EFbXyPJO0yz2PkLVwJaSTchu8OODOwgGQQGbn4/B38EeD\n" +
        "ri001+Sh9MB3o4s3zZpbF4LPUfNFghyKXXAkRynBrJf2vcbLQl7FK4MDAgMBAAEC\n" +
        "gYAB2diOeuce2LpH042KXklp/q6dfmkk8oiHcjECpCFgO5rWi3bBWS7eoygp/cHU\n" +
        "qU208gAwaagmNG+qpKa7MIE3B10q6G7GMvClzKQ30w3mfMWsoWm5nuxXazzDAY7j\n" +
        "LPh8nNXtKIxMt7wnEobsCco4QKrUv2p6RC/PnXyhicJw0QJBAJY/noBaOeGeaEmK\n" +
        "XNqHjU7z6oi7a9amr4xURbcvxUVmxFBpojBjjL79kGyN8ZT5cifPWNLVzwiq99qE\n" +
        "iihy1m0CQQCBBKl0TXlj5XVwHvWvX8EzR16cDbOfSt80JpP/4U70SfJ6UhKeKlSo\n" +
        "9afFx1VaBgXVn4pDBInczXyYfhD0S5kvAkBthx0lliCBv7dofMvppk011AwR9wbK\n" +
        "6KIqWzijLNjTGfJcaFUKj1eH11KUP/lvT1SPftDSiXiuaevaySnqCKUVAkAfC5oj\n" +
        "DEl7ikl6E1kXPDlnN3NCpeFlIUUYbXgLiJHRIsIgQQON363Dgmk+pDqbkPtybhN9\n" +
        "EOiDo0aqAxvdTRutAkBfucREtLuHsZpuDkAy9NHZTlYbGVc3PdRA5C6jJLc9qx7V\n" +
        "1yNBYIlAxb7eyZy0NbVk9MyS1fSIJVDZnqzPsZsX"

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
    return CryptoJS.AES.decrypt(this.state.value, this.key).toString(CryptoJS.enc.Utf8)
  }

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
            <Label for="exampleEmail">Decrypt: </Label>
            <Input type="text" name="decryptInput" id="exampleDecrypt" placeholder="" value={this.state.value} onChange={this.handleChange} />
            <Button color="danger" type={"submit"}>Submit</Button>
            <Input type="textarea" name="decryptOutput" id="decryptText" value={this.state.result} />
        </Form>
    );
  }
}

export default Decrypt;