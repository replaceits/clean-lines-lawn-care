
import React from 'react';
import { Route } from 'react-router';

import ReviewForm from '../forms/ReviewForm';
import ReviewsGrid from '../ReviewsGrid';
import RowButton from '../RowButton';

import './Reviews.scss';

class Reviews extends React.Component {
  render() {
    return (
      <div className='page page-reviews'>
        <Route exact path='/reviews'>
          <ReviewsGrid enablePages />
          <RowButton to='/reviews/new' noBG>Write a review</RowButton>
        </Route>

        <Route exact path='/reviews/new'>
          <ReviewForm />
        </Route>
      </div>
    )
  }
}

export default Reviews;
