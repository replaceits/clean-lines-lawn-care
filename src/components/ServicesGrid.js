
import PropTypes from 'prop-types';

import ServicesGridItem from './ServicesGridItem';
import services from '../data/services';

import './ServicesGrid.scss';

function ServicesGrid({itemsPerPage}) {
  return (
    <ul className='services-grid no-style'>
      {services.top(itemsPerPage).map((service, key) => (
        <ServicesGridItem name={service.name} image={service.image} key={key} />
      ))}
    </ul>
  )
}

ServicesGrid.propTypes = {
  itemsPerPage: PropTypes.number
}

ServicesGrid.defaultProps = {
  itemsPerPage: 6
}

export default ServicesGrid;
