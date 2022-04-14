import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Signup from './Signup';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Login />
    <Signup />
  </React.StrictMode>,
  document.getElementById('root')
);
