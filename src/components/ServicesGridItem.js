
import React from 'react';
import PropTypes from 'prop-types';

import './ServicesGridItem.scss';

class ServicesGridItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }

  render() {
    return (
      <li 
        className='services-grid-item' 
        style={{backgroundImage: `url(${this.props.image})`}}
      >
        <div className='services-grid-item-overlay'>
          {this.props.name}
        </div>
      </li>
    )
  }
}

export default ServicesGridItem;
