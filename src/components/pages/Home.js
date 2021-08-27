
import React from 'react';
import RowButton from '../RowButton';

import { FaAward, FaComments, FaFlagUsa, FaPhoneAlt, FaSeedling, FaSnowplow } from 'react-icons/fa';

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

        <ServicesGrid itemsPerPage={6} />

        <RowButton to='/services'>
          See more services!&nbsp;<FaSeedling />
        </RowButton>

        <ReviewsGrid itemsPerPage={4} />

        <RowButton to='/reviews'>
          Read more reviews!&nbsp;<FaComments /> 
        </RowButton>

        <div className='overview'>
          <div className='overview-item serving' />
          <div className='overview-item'>
            <div className='overview-item-title'>
              Serving central Virginia&nbsp;<FaFlagUsa />
            </div>
            <div className='overview-item-content'>
              Our service areas include Charlottesville, Scottsville, Fluvanna, Buckingham and Zions Crossroads.
            </div>
          </div>
          <div className='overview-item'>
            <div className='overview-item-title'>
              Quality Assured&nbsp;<FaAward />
            </div>
            <div className='overview-item-content'>
              Our workers’ combined 30+ years of experience assures your yard will end up looking great.
            </div>
          </div>
          <div className='overview-item quality' />
          <div className='overview-item full-service' />
          <div className='overview-item'>
            <div className='overview-item-title'>
              Full Service&nbsp;<FaSnowplow />
            </div>
            <div className='overview-item-content'>
              With our full service offerings, we will be able to help with any of your landscape needs.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
