
import ServicesGrid from '../ServicesGrid';

import './Services.scss';

function Services() {
  return (
    <div className='page page-services'>
      <ServicesGrid itemsPerPage={100} />
    </div>
  );
}

export default Services;
