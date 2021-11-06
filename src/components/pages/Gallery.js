
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import services from '../../data/services';

import './Gallery.scss';

function Gallery() {
  const [selected, setSelected] = React.useState(0);

  const prev = () => {
    setSelected((selected) => {
      if (selected <= 0) return selected;
      return selected - 1;
    })
  }

  const next = () => {
    setSelected((selected) => {
      if (selected >= services.services.length - 1) return selected;
      return selected + 1;
    })
  }

  const selectedService = services.services[selected];

  return (
    <div className='page page-gallery'>
      <div className='gallery-wrapper'>
        <div className='showcase'>
          <button 
            className='no-style showcase-control left'
            onClick={prev}
          >
            <FaChevronLeft />
          </button>
          <img 
            className='showcase-image'
            src={selectedService.image} 
            alt={selectedService.name}
          />
          <button 
            className='no-style showcase-control right'
            onClick={next}
          >
            <FaChevronRight />
          </button>
        </div>
        <div className='image-selector'>
          {services.services.map((service, key) => (
            <button 
              className='image-selector-item no-style' 
              onClick={() => setSelected(key)}
              key={key}
            >
              <img
                className='image-selector-item-preview'
                src={service.image}
                alt={service.name}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
