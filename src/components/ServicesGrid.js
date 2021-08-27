
import React from 'react';
import PropTypes from 'prop-types';

import ServicesGridItem from './ServicesGridItem';
import services from '../data/services';

import './ServicesGrid.scss';

class ServicesGrid extends React.Component {
  static propTypes = {
    itemsPerPage: PropTypes.number
  }

  static defaultProps = {
    itemsPerPage: 6
  }

  render() {
    return (
      <ul className='services-grid no-style'>
        {services.top(this.props.itemsPerPage).map((service, key) => (
          <ServicesGridItem name={service.name} image={service.image} key={key} />
        ))}
      </ul>
    )
  }
}

export default ServicesGrid;
