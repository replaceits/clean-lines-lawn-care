
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import services from '../../data/services';

import './Gallery.scss';

class Gallery extends React.Component {
  state = {
    selected: 0
  }

  prev = () => {
    this.setState(({selected}) => {
      if (selected <= 0) return {selected};
      return {selected: selected - 1};
    })
  }

  next = () => {
    this.setState(({selected}) => {
      if (selected >= services.services.length - 1) return {selected};
      return {selected: selected + 1};
    })
  }

  render() {
    const selectedService = services.services[this.state.selected];
    return (
      <div className='page page-gallery'>
        <div className='gallery-wrapper'>
          <div className='showcase'>
            <button 
              className='no-style showcase-control left'
              onClick={this.prev}
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
              onClick={this.next}
            >
              <FaChevronRight />
            </button>
          </div>
          <div className='image-selector'>
            {services.services.map((service, key) => (
              <button 
                className='image-selector-item no-style' 
                onClick={()=>this.setState({selected: key})}
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
    )
  }
}

export default Gallery;
