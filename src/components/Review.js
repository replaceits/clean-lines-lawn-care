
import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaRegStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import './Review.scss';

class Review extends React.Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    stars: PropTypes.number
  }

  static defaultProps = {
    stars: 5
  }

  render() {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        i <= this.props.stars - 1
          ? <FaStar key={i} />
          : <FaRegStar key={i} />
      )
    }

    return (
      <li className='review'>
        <div className='review-upper'>
          <div className='review-stars'>
            {stars}
          </div>
          <div className='review-author'>
            {this.props.author}
          </div>
        </div>
        <div className='review-content'>
          <FaQuoteLeft className='icon' />
          {this.props.content}
          <FaQuoteRight className='icon' />
        </div>
      </li>
    )
  }
}

export default Review;
