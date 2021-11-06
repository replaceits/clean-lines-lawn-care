
import React from 'react';

import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import ScrollContext from '../contexts/scroll';

function ScrollToTop({scrollId, location, children}) {
  const scrollToTop = React.useCallback(() => document.getElementById(scrollId).scrollTop = 0, [scrollId]);

  React.useEffect(() => {
    scrollToTop()
  }, [location.key, scrollToTop]);

  return (
    <ScrollContext.Provider value={scrollToTop}>
      {children}
    </ScrollContext.Provider>
  );
}

ScrollToTop.propTypes = {
  scrollId: PropTypes.string.isRequired
}

export default withRouter(ScrollToTop);
