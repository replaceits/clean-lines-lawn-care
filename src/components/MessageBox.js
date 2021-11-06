
import PropTypes from 'prop-types';

import './MessageBox.scss';

function MessageBox({theme, icon, title, content}) {
  return (
    <div className={`message-box ${theme}`}>
      <div className='message-wrapper'>
        <div className='message-icon'>{icon}</div>
        <h1 className='message-title'>{title}</h1>
        <p className='message-content'>{content}</p>
      </div>
    </div>
  );
}

MessageBox.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  theme: PropTypes.oneOf(['default', 'success', 'error'])
}

MessageBox.defaultProps = {
  theme: 'default'
}

export default MessageBox;
