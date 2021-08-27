
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Logo.scss';

class Logo extends React.Component {
  static propTypes = {
    big: PropTypes.bool
  }

  static defaultProps = {
    big: false
  }

  render() {
    return (
      <Link to='/' className={`logo no-style ${this.props.big ? 'big' : ''}`}>
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
