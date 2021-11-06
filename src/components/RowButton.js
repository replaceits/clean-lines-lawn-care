
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './RowButton.scss';

function RowButton({to, href, onClick, noBG, children}) {
  const userButton = (
    <button className='row-button-button no-style'>
      {children}
    </button>
  );

  let buttonLink = null;

  if (to) {
    buttonLink = <Link to={to} className='no-style'>{userButton}</Link>;
  } else if (href) {
    buttonLink = <a href={href} className='no-style'>{userButton}</a>;
  } else {
    buttonLink = <div onClick={onClick} className='no-style'>{userButton}</div>
  }

  return (
    <div className={`row-button ${noBG ? 'noBG' : ''}`}>
      {buttonLink}
    </div>
  )
}

RowButton.propTypes = {
  noBG: PropTypes.bool,
  to: PropTypes.string,
  href: PropTypes.string
}

RowButton.defaultProps = {
  noBG: false
}

export default RowButton;
