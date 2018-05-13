import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'popper.js/dist/popper.min.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
