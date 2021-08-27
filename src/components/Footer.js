
import React from 'react';
import Logo from './Logo';

import './Footer.scss';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-side'>
            <Logo />
            <div className='footer-row'>
              <div className='footer-item'>
                7:30am - 6:00pm
              </div>
              <div className='footer-item'>
                <a className='no-style' href='tel:4349819705'>(434) 981-9705</a>
              </div>
            </div>
            <div className='footer-row'>
              <div className='footer-item'>
                <a 
                  href='https://www.facebook.com/cleanlineslawncare'
                  className='no-style icon'
                >
                  <FaFacebookSquare />
                </a>
              </div>
            </div>
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
