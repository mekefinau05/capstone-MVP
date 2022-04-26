import React from 'react';
import './Bgchange.css';

function Bgchange() {
  return (
    <div className='bgchange'>
      <img
        src={require('../src/images/fullmenu.png')}
        className='background'
        alt='chocolate cakes'
      />
    </div>
  );
}

export default Bgchange;
