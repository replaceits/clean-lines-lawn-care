
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import ContactInfo from './ContactInfo';

import './Footer.scss';


class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-side'>
            <Logo />
            <ContactInfo />
          </div>
          <div className='footer-side links'>
            <div className='footer-links'>
              <Link to='/' className='no-style'>Home</Link>
              <Link to='/reviews' className='no-style'>Reviews</Link>
              <Link to='/gallery' className='no-style'>Gallery</Link>
              <Link to='/contact-us' className='no-style'>Contact Us</Link>
              <Link to='/free-estimate' className='no-style'>Free Estimate</Link>
              <Link to='/services' className='no-style'>Services</Link>
            </div>
          </div>
        </div>
        
        <div className='footer-attribution'>
          <a href='https://www.sidw.me' className='no-style'>Website by sidw.me</a>
        </div>
      </div>
    )
  }
}

export default Footer;
