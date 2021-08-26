
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ScrollProvider } from '../contexts/scroll';

class ScrollToTop extends React.Component {
  static propTypes = {
    scrollId: PropTypes.string.isRequired
  }

  scrollToTop = () => {
    document.getElementById(this.props.scrollId).scrollTop = 0;
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.key !== prevProps.location.key) {
      this.scrollToTop()
    }
  }

  render() {
    return (
      <ScrollProvider value={this.scrollToTop}>
        {this.props.children}
      </ScrollProvider>
    );
  }
}

export default withRouter(ScrollToTop);
