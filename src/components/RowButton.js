
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

    let buttonLink = null;

    if (this.props.to) {
      buttonLink = <Link to={this.props.to} className='no-style'>{userButton}</Link>;
    } else if (this.props.href) {
      buttonLink = <a href={this.props.href} className='no-style'>{userButton}</a>;
    } else {
      buttonLink = <button onClick={this.props.onClick} className='no-style'>{userButton}</button>
    }

    return (
      <div className={`row-button ${this.props.noBG ? 'noBG' : ''}`}>
        {buttonLink}
      </div>
    )
  }
}

export default RowButton;
