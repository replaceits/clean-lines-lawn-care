
import React from "react";
import PropTypes from 'prop-types';

import reviews from "../data/reviews";
import Review from "./Review";
import Pages from './Pages';

import './ReviewsGrid.scss';
import PageTurner from "./PageTurner";

class ReviewsGrid extends React.Component {
  static propTypes = {
    itemsPerPage: PropTypes.number,
    enablePages: PropTypes.bool
  }

  static defaultProps = {
    itemsPerPage: 10,
    enablePages: false
  }

  getSelectedReviews(page = 0) {
    const selectedReviews = reviews.top(this.props.itemsPerPage, page);

    const reviewsDOMLeft = [];
    const reviewsDOMRight = [];

    for (let i = 0; i < selectedReviews.length; i++) {
      const selectedArray = i % 2 === 0 ? reviewsDOMLeft : reviewsDOMRight;
      
      selectedArray.push(
        <Review
          author={selectedReviews[i].author}
          content={selectedReviews[i].content}
          stars={selectedReviews[i].stars}
          key={(page * this.props.itemsPerPage) + i} 
        />
      );
    };

    return {reviewsDOMLeft, reviewsDOMRight};
  }

  render() {
    return (
      <Pages itemsPerPage={this.props.itemsPerPage} itemCount={reviews.reviews.length}>
        {({page, maxPages, prev, next, goTo}) => {
          const selectedReviews = this.getSelectedReviews(page);

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

              {this.props.enablePages
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
    )
  }
}

export default ReviewsGrid;
