import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Amelia's Sweet Treats</h1>
        <img
          src={require('../src/images/fullmenu.png')}
          className='image'
          alt='chocolate cakes'
        />
      </header>
    </div>
  );
}

export default App;
