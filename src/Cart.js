import React from 'react';
import axios from 'axios';
import './Cart.css';

function Cart({ cart, removeFromCart, clearCart }) {
  const submitOrder = () => {
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    axios
      .post('/api/cart', { cart, userId, userName })
      .then((res) => {
        alert(
          `${res.data}, thank you for your order! We will call you when it's ready.`
        );
        clearCart();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='cart'>
      <h2>This is your Cart!</h2>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name}
          {'   '}
          {item.price}
          {'   '}
          <button onClick={() => removeFromCart(item)}>remove</button>
        </div>
      ))}
      <button onClick={submitOrder}>Submit Order</button>
    </div>
  );
}

export default Cart;
