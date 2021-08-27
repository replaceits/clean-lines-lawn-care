
import React from 'react';
import ServicesGrid from '../ServicesGrid';

import './Services.scss';

class Services extends React.Component {
  render() {
    return (
      <div className='page page-services'>
        <ServicesGrid itemsPerPage={100} />
      </div>
    )
  }
}

export default Services;
