
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './RowButton.scss';

class RowButton extends React.Component {
  static propTypes = {
    noBG: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string
  }

  static defaultProps = {
    noBG: false
  }

  render() {
    const userButton = (
      <button className='row-button-button no-style'>
        {this.props.children}
      </button>
    );

    return (
      <div className={`row-button ${this.props.noBG ? 'noBG' : ''}`}>
        {
          this.props.to
            ? <Link to={this.props.to} className='no-style'>{userButton}</Link>
            : <a href={this.props.href} className='no-style'>{userButton}</a>
        }
      </div>
    )
  }
}

export default RowButton;
