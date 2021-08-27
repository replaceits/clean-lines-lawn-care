
import React from 'react';
import PropTypes from 'prop-types';

class Pages extends React.Component {
  static propTypes = {
    itemsPerPage: PropTypes.number,
    itemCount: PropTypes.number.isRequired
  }

  static defaultProps = {
    itemsPerPage: 6,
  }

  state = {
    page: 0,
    maxPages: Math.ceil(this.props.itemCount / this.props.itemsPerPage),
    prev: () => {
      this.setState(({page}) => {
        if (page === 0) {
          return { page };
        }
  
        return { page: page - 1 }
      })
    },
    next: () => {
      this.setState(({page}) => {
        if (page >= this.state.maxPages - 1) {
          return { page }
        }
  
        return { page: page + 1 }
      })
    },
    goTo: (page) => {
      this.setState({ page });
    }
  }

  render() {
    return this.props.children(this.state)
  }
}

export default Pages;
