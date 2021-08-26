
import React from 'react';
import RowButton from '../RowButton';

import { FaComments, FaPhoneAlt, FaSeedling } from 'react-icons/fa';

import './Home.scss';
import ServicesGrid from '../ServicesGrid';
import ReviewsGrid from '../ReviewsGrid';

class Home extends React.Component {
  render() {
    return (
      <div className='page page-home'>
        <div className='home-header'>
          <div className='home-header-overlay'>
            We are a licensed full service landscaping company with over 30 years of worker experience.
          </div>
        </div>
        <RowButton href='tel:4349819705'>
          <FaPhoneAlt />&nbsp;Call for a consultation! (434) 981-9705
        </RowButton>

        <ServicesGrid />

        <RowButton to='/services'>
          See more services!&nbsp;<FaSeedling />
        </RowButton>

        <ReviewsGrid itemsPerPage={1} />

        <RowButton to='/reviews'>
          Read more reviews!&nbsp;<FaComments /> 
        </RowButton>
      </div>
    )
  }
}

export default Home;
