import React from 'react';
import './Cart.css';

function Cart({ cart, removeFromCart }) {
  return (
    <div className='cart'>
      <h2>This is your Cart!</h2>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => removeFromCart(item)}>remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
