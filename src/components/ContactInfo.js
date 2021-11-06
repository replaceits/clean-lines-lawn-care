
import PropTypes from 'prop-types';
import { FaFacebookSquare } from 'react-icons/fa';

import './ContactInfo.scss';

function ContactInfo({theme}) {
  return (
    <div className={`contact-info ${theme}`}>
      <div className='contact-row'>
        <div className='contact-item'>
          7:30am - 6:00pm
        </div>
        <div className='contact-item'>
          <a className='no-style' href='tel:4349819705'>(434) 981-9705</a>
        </div>
      </div>
      <div className='contact-row'>
        <div className='contact-item'>
          <a 
            href='https://www.facebook.com/cleanlineslawncare'
            className='no-style icon'
          >
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </div>
  );
}

ContactInfo.propTypes = {
  theme: PropTypes.oneOf(['default', 'blue'])
}

ContactInfo.defaultProps = {
  theme: 'default'
}

export default ContactInfo;
