import React from 'react';
import { Link } from 'react-router-dom';

function NavIn() {
  return (
    <nav className='nav'>
      <Link className='link' to='/'>
        Home
      </Link>{' '}
      |{' '}
      <Link className='link' to='/cart'>
        Cart
      </Link>{' '}
      |{' '}
      <Link className='link' to='/logout'>
        Logout
      </Link>
    </nav>
  );
}

export default NavIn;
