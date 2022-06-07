import React, { useState } from 'react';
import './App.css';
import Items from './Items';
import Footer from './Footer';
import NavIn from './NavIn';
import Cart from './Cart';
import Bgchange from './Bgchange';

function App() {
  const [cart, setCart] = useState([]);
  const userId = localStorage.getItem('userId');

  const addToCart = (item) => {
    setCart((existingCart) => [...existingCart, item]);
    console.log(cart, userId);
  };

  const removeFromCart = (cartToBeRemoved) => {
    setCart((existingCart) =>
      existingCart.filter((cart) => cart.id !== cartToBeRemoved.id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className='App'>
      <NavIn />
      <header className='App-header'>
        <h1>Amelia's Sweet Treats</h1>
        <Bgchange />
      </header>
      <Items addToCart={addToCart} />
      {cart.length ? (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      ) : null}
      <Footer />
    </div>
  );
}

export default App;
