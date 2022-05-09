import React from 'react';
import axios from 'axios';
import './Cart.css';

function Cart({ cart, removeFromCart }) {
  const submitOrder = () => {
    axios
      .post('/api/cart', { cart })
      .then((res) => {
        console.log(res.data);
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
