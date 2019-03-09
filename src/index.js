import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { env } from './config'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App env={env}/>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
