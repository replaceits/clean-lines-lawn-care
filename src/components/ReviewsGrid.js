
import React from "react";
import PropTypes from 'prop-types';

import reviews from "../data/reviews";
import Review from "./Review";
import Pages from './Pages';

import './ReviewsGrid.scss';
import PageTurner from "./PageTurner";

function ReviewsGrid({enablePages, itemsPerPage}) {
  const getSelectedReviews = (page = 0) => {
    const selectedReviews = reviews.top(itemsPerPage, page);

    const reviewsDOMLeft = [];
    const reviewsDOMRight = [];

    for (let i = 0; i < selectedReviews.length; i++) {
      const selectedArray = i % 2 === 0 ? reviewsDOMLeft : reviewsDOMRight;
      
      selectedArray.push(
        <Review
          author={selectedReviews[i].author}
          content={selectedReviews[i].content}
          stars={selectedReviews[i].stars}
          key={(page * itemsPerPage) + i} 
        />
      );
    };

    return {reviewsDOMLeft, reviewsDOMRight};
  }

  return (
    <Pages itemsPerPage={itemsPerPage} itemCount={reviews.reviews.length}>
      {({page, maxPages, prev, next, goTo}) => {
        const selectedReviews = getSelectedReviews(page);

        return (
          <div className='reviews-grid'>
            <div className='reviews-wrapper'>
              <ul className='reviews-container no-style left'>
                {selectedReviews.reviewsDOMLeft}
              </ul>
              <ul className='reviews-container no-style right'>
                {selectedReviews.reviewsDOMRight}
              </ul>
            </div>

            {enablePages
              ? <PageTurner 
                  page={page} 
                  maxPages={maxPages} 
                  prev={prev} 
                  next={next} 
                  goTo={goTo}
                />
              : null}
          </div>
        );
      }}
    </Pages>
  );
}

ReviewsGrid.propTypes = {
  itemsPerPage: PropTypes.number,
  enablePages: PropTypes.bool
}

ReviewsGrid.defaultProps = {
  itemsPerPage: 6,
  enablePages: false
}

export default ReviewsGrid;
