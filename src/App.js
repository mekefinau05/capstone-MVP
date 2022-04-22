import React from 'react';
import './App.css';
import Items from './Items';
import Footer from './Footer';
import Nav from './Nav';
import Bgchange from './Bgchange';

function App() {
  return (
    <div className='App'>
      <Nav />
      <header className='App-header'>
        <h1>Amelia's Sweet Treats</h1>
        <Bgchange />
        {/* <img
          src={require('../src/images/fullmenu.png')}
          className='image'
          alt='chocolate cakes'
        /> */}
      </header>
      <Items />
      <Footer />
    </div>
  );
}

export default App;
