
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

import './Nav.scss';

class Nav extends React.Component {
  state = {
    navOpen: false
  }

  toggleNav = () => {
    this.setState(({navOpen}) => ({navOpen: !navOpen}));
  }

  render() {
    return (
      <div className='nav'>
        <div className='nav-title'>
          <Logo />
        </div>
        <button 
          className='nav-mobile no-style'
          onClick={this.toggleNav}
        >
          <FaBars />
        </button>
        <ul className={`nav-options no-style ${this.state.navOpen ? 'open' : ''}`}>
          <li>
            <NavLink 
              className='no-style' 
              activeClassName='selected' 
              to='/reviews'
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink 
              className='no-style' 
              activeClassName='selected' 
              to='/gallery'
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink 
              className='no-style' 
              activeClassName='selected' 
              to='/contact-us'
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              className='no-style' 
              activeClassName='selected' 
              to='/free-estimate'
            >
              Free Estimate
            </NavLink>
          </li>
          <li>
            <NavLink 
              className='no-style' 
              activeClassName='selected' 
              to='/services'
            >
              Services
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav;
