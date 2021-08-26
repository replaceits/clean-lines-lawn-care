
import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

class Logo extends React.Component {
  render() {
    return (
      <Link to='/' className='logo no-style'>
        <img 
          className='logo-img' 
          src='https://cleanlineslawncare.s3.amazonaws.com/oldimages/logo.png'
          alt='Clean Lines Lawn Care Logo'
        />
        Clean Lines Lawn Care
      </Link>
    )
  }
}

export default Logo;
