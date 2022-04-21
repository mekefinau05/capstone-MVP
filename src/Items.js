import React from 'react';
import './Items.css';

function Items() {
  return (
    <div className='Item'>
      <h1 className='header'>This is our menu.</h1>
      <h3 className='subheader'>
        We take pride in all our homemade products and service to our customer!
      </h3>
      <section className='Items'>
        <div className='chocolate-cake'>
          <h2>Chocolate Cake</h2>
          <img
            src={require('../src/images/keke.png')}
            className='choco-cake'
            alt='chocolate cakes'
          />
          <p>Yummie chocolate cake.</p>
          <h3 className='price'>$28.80</h3>
          <button className='button'>Add to Cart</button>
        </div>
        <div className='chocolate-cake'>
          <h2>Pineapple Pie</h2>
          <img
            src={require('../src/images/pietrio.png')}
            className='choco-cake'
            alt='chocolate cakes'
          />
          <p>Delicious pineapple pie</p>
          <h3 className='price'>$25.40</h3>
          <button className='button'>Add to Cart</button>
        </div>
        <div className='chocolate-cake'>
          <h2>Profiteroles</h2>
          <img
            src={require('../src/images/profiteroles.png')}
            className='choco-cake'
            alt='chocolate cakes'
          />
          <p>Tasty profiteroles</p>
          <h3 className='price'>$24.00</h3>
          <button className='button'>Add to Cart</button>
        </div>
        <div className='chocolate-cake'>
          <h2>Tiramisu</h2>
          <img
            src={require('../src/images/tiramisu.png')}
            className='choco-cake'
            alt='chocolate cakes'
          />
          <p>Tiramisu</p>
          <h3 className='price'>$26.80</h3>
          <button className='button'>Add to Cart</button>
        </div>
      </section>
    </div>
  );
}

export default Items;
