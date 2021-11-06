
import PropTypes from 'prop-types';

import './ServicesGridItem.scss';

function ServicesGridItem({image, name}) {
  return (
    <li 
      className='services-grid-item' 
      style={{backgroundImage: `url(${image})`}}
    >
      <div className='services-grid-item-overlay'>
        {name}
      </div>
    </li>
  );
}

ServicesGridItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default ServicesGridItem;
