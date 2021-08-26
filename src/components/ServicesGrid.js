
import React from 'react';

import ServicesGridItem from './ServicesGridItem';
import services from '../data/services';

import './ServicesGrid.scss';

class ServicesGrid extends React.Component {
  render() {
    return (
      <ul className='services-grid no-style'>
        {services.top(6).map((service, key) => (
          <ServicesGridItem name={service.name} image={service.image} key={key} />
        ))}
      </ul>
    )
  }
}

export default ServicesGrid;
