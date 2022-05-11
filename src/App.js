import React, { useState } from 'react';
import './App.css';
import Items from './Items';
import Footer from './Footer';
import Nav from './Nav';
import Cart from './Cart';
import Bgchange from './Bgchange';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (cart) => {
    setCart((existingCart) => [...existingCart, cart]);
  };

  const removeFromCart = (cartToBeRemoved) => {
    setCart((existingCart) =>
      existingCart.filter((cart) => cart.id !== cartToBeRemoved.id)
    );
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginUser = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route
          path='*'
          element={isLoggedIn ? <Items /> : <Login logFunction={loginUser} />}
        />
      </Routes>
      <header className='App-header'>
        <h1>Amelia's Sweet Treats</h1>
        <Bgchange />
      </header>
      <Items addToCart={addToCart} />
      {cart.length ? (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      ) : null}
      <Footer />
    </div>
  );
}

export default App;
