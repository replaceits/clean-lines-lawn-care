
import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaRegStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import './Review.scss';

function Review({content, author, stars}) {
  const starsDOM = [];

  for (let i = 0; i < 5; i++) {
    starsDOM.push(
      i <= stars - 1
        ? <FaStar key={i} />
        : <FaRegStar key={i} />
    )
  }

  return (
    <li className='review'>
      <div className='review-upper'>
        <div className='review-stars'>
          {starsDOM}
        </div>
        <div className='review-author'>
          {author}
        </div>
      </div>
      <div className='review-content'>
        <FaQuoteLeft className='icon' />
        {content}
        <FaQuoteRight className='icon' />
      </div>
    </li>
  )
}

Review.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  stars: PropTypes.number
}

Review.defaultProps = {
  stars: 5
}

export default Review;
