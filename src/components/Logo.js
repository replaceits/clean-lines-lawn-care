
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Logo.scss';

function Logo({big}) {
  return (
    <Link to='/' className={`logo no-style ${big ? 'big' : ''}`}>
      <img 
        className='logo-img' 
        src='https://cleanlineslawncare.s3.amazonaws.com/oldimages/logo.png'
        alt='Clean Lines Lawn Care Logo'
      />
      Clean Lines Lawn Care
    </Link>
  );
}

Logo.propTypes = {
  big: PropTypes.bool
}

Logo.defaultProps = {
  big: false
}

export default Logo;
