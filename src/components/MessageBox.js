
import React from 'react';
import PropTypes from 'prop-types';

import './MessageBox.scss';

class MessageBox extends React.Component {
  static propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    theme: PropTypes.oneOf(['default', 'success', 'error'])
  }

  static defaultProps = {
    theme: 'default'
  }

  render() {
    return (
      <div className={`message-box ${this.props.theme}`}>
        <div className='message-wrapper'>
          <div className='message-icon'>{this.props.icon}</div>
          <h1 className='message-title'>{this.props.title}</h1>
          <p className='message-content'>{this.props.content}</p>
        </div>
      </div>
    )
  }
}

export default MessageBox;
