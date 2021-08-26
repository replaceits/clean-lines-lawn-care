
import React from 'react';
import { Link } from 'react-router-dom';

import './RowButton.scss';

class RowButton extends React.Component {
  render() {
    const userButton = <button className='row-button-button'>{this.props.children}</button>;

    return (
      <div className='row-button'>
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
