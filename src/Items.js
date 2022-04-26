import React, { useState } from 'react';
import './Items.css';

function Items() {
  const items = [
    {
      id: 1,
      name: 'Chocolate-cake',
      imgSrc: '/images/keke.png',
      description: 'Yummy chocolate cake for any occasions.',
      price: '$28.80',
    },
    {
      id: 2,
      name: 'Pineapple pie',
      imgSrc: '/images/pietrio.png',
      description: 'Pie with decoration at no charge',
      price: '$25.40',
    },
    {
      id: 3,
      name: 'Profiteroles',
      imgSrc: '/images/profiteroles.png',
      description: 'Profiteroles with any flavor of fillings you like',
      price: '$24.00',
    },
    {
      id: 4,
      name: 'Tiramisu',
      imgSrc: '/images/tiramisu.png',
      description: 'Tiramisu delicious and fresh',
      price: '$26.80',
    },
  ];
  const [cart, setCart] = useState([]);

  // console.log(cart);

  return (
    <div className='Item'>
      <h1 className='header'>This is our menu.</h1>
      <h3 className='subheader'>
        We take pride in our homemade products and service to our customer!
      </h3>
      <section className='Items'>
        {items.map((item) => {
          return (
            <div className='chocolate-cake'>
              <h2>{item.name}</h2>
              <img
                src={item.imgSrc}
                className='choco-cake'
                alt='chocolate cakes'
              />
              <p>{item.description}</p>
              <h3 className='price'>{item.price}</h3>
              <button
                className='button'
                onClick={() => setCart([...cart, item])}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Items;
