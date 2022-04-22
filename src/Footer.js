import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <section className='follow'>
        <p> Follow us on:</p>
        <a className='tag' href='https://www.facebook.com/Ongo.finau/'>
          <p>
            <img
              src='https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-logo-3.png'
              className='logo'
              alt='facebook logo'
            />
            Sweet Treats Bakery
          </p>
        </a>
        <a className='tag' href='https://www.instagram.com/ongovaka/'>
          <p>
            <img
              src='https://image.shutterstock.com/image-photo/kazan-russia-october-27-2016-260nw-506008927.jpg'
              className='logo'
              alt='instagram logo'
            />
            Sweet Treats Bakery
          </p>
        </a>
      </section>
      <section className='contact'>
        <p> Contact us:</p>
        <p>
          <img
            src='https://i.pinimg.com/474x/93/2a/07/932a071e0f3a5dd2b29f5b848a182511.jpg'
            className='logo'
            alt='tcc logo'
          />
          (676)-77-48648
        </p>
        <p>
          <img
            src='https://www.pngitem.com/pimgs/m/156-1568222_red-png-contact-icon-png-download-phone-red.png'
            className='logo'
            alt='digicel logo'
          />
          (676)-860-8660
        </p>
        <p>
          <img
            src='https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png'
            className='logo'
            alt='instagram logo'
          />
          sweettreats@gmail.com
        </p>
      </section>
    </div>
  );
}

export default Footer;
