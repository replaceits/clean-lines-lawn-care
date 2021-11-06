
import React from 'react';
import PropTypes from 'prop-types';

import ScrollContext from '../contexts/scroll';

import './PageTurner.scss';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

class PageTurner extends React.Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    maxPages: PropTypes.number.isRequired,
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
    goTo: PropTypes.func.isRequired
  }

  getPageNumbers(scrollToTop = () => {}) {
    const pageNumbers = [];

    for (let i = 0; i < this.props.maxPages; i++) {
      const current = this.props.page === i;

      pageNumbers.push(
        <button 
          className={`no-style page-turner-number ${current ? 'current' : ''}`}
          onClick={() => {
            this.props.goTo(i)
            scrollToTop();
          }} 
          disabled={current}
          key={i}
        >
          {i + 1}
        </button>
      )
    }

    return pageNumbers;
  }

  render() {
    return (
      <div className='page-turner'>
        <ScrollContext.Consumer>
          {scrollToTop => (
            <React.Fragment>
              <button
                className='no-style page-turner-number'
                onClick={() => {
                  this.props.prev();
                  scrollToTop();
                }}
                disabled={this.props.page === 0}
              >
                <FaAngleLeft />
              </button>

              {this.getPageNumbers(scrollToTop)}

              <button
                className='no-style page-turner-number'
                onClick={() => {
                  this.props.next();
                  scrollToTop();
                }}
                disabled={this.props.page >= this.props.maxPages - 1}
              >
                <FaAngleRight />
              </button>
            </React.Fragment>
          )}
        </ScrollContext.Consumer>
      </div>
    )
  }
}

export default PageTurner;
