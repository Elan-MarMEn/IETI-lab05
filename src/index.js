import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login/Login';
import reportWebVitals from './reportWebVitals';
import Drawers from './components/Drawer/Drawers';
import * as serviceWorker from './registerServiceWorker'

ReactDOM.render(
  <React.StrictMode>
    < Login />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();