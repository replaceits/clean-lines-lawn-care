
import React from "react";
import PropTypes from 'prop-types';

import reviews from "../data/reviews";
import Review from "./Review";

import './ReviewsGrid.scss';

class ReviewsGrid extends React.Component {
  static propTypes = {
    itemsPerPage: PropTypes.number,
  }

  render() {
    return (
      <ul className='reviews-grid'>
        {reviews.reviews.map((review, key) => (
          <Review
            author={review.author}
            content={review.content}
            stars={review.stars}
            key={key} 
          />
        ))}
      </ul>
    )
  }
}

export default ReviewsGrid;
