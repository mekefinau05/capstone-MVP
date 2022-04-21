import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Signup from './Signup';
import Items from './Items';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Login /> */}
    {/* <Signup /> */}
    <Items />
  </React.StrictMode>,
  document.getElementById('root')
);
