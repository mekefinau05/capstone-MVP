import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Amelia's Sweet Treats</h1>
        <img
          src={require('../src/images/keke.png')}
          className='image'
          alt='chocolate cakes'
        ></img>
      </header>
    </div>
  );
}

export default App;
