
import React from 'react';
import ReviewsGrid from '../ReviewsGrid';

import './Reviews.scss';

class Reviews extends React.Component {
  render() {
    return (
      <div className='page page-reviews'>
        <ReviewsGrid enablePages />
      </div>
    )
  }
}

export default Reviews;
