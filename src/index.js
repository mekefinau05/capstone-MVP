import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Signup from './Signup';
import Items from './Items';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Login />
    <Signup />
    <Items />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
