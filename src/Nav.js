import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className='nav'>
      <Link className='link' to='/'>
        Home
      </Link>{' '}
      |{' '}
      <Link className='link' to='/login'>
        Login
      </Link>{' '}
      |{' '}
      <Link className='link' to='/signup'>
        Signup
      </Link>{' '}
    </nav>
  );
}

export default Nav;
