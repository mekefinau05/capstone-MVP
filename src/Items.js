import React from 'react';
import './Items.css';
// import Login from './Login';

function Items({ addToCart }) {
  const items = [
    {
      id: 1,
      name: 'Chocolate-cake',
      imgSrc: '/images/keke.png',
      description: 'Yummy chocolate cake for any occasions.',
      price: '28.80',
    },
    {
      id: 2,
      name: 'Pineapple pie',
      imgSrc: '/images/pietrio.png',
      description: 'Pie with decoration at no charge',
      price: '25.40',
    },
    {
      id: 3,
      name: 'Profiteroles',
      imgSrc: '/images/profiteroles.png',
      description: 'Profiteroles with any flavor of fillings you like',
      price: '26.50',
    },
    {
      id: 4,
      name: 'Tiramisu',
      imgSrc: '/images/tiramisu.png',
      description: 'Tiramisu delicious and fresh',
      price: '26.80',
    },
  ];

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const loginUser = () => setIsLoggedIn(!isLoggedIn);
  // console.log(cart);
  const userId = localStorage.getItem('userId');

  return (
    <div className='Item'>
      <h1 className='header'>This is our menu.</h1>
      <h3 className='subheader'>
        We take pride in our homemade products and services to our customers!
      </h3>
      <section className='Items'>
        {items.map((item) => {
          return (
            <div className='chocolate-cake' key={item.id}>
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
                onClick={() => addToCart(item, userId)}
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
