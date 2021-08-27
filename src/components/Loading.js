
import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import './Loading.scss';

class Loading extends React.Component {
  render() {
    return (
      <div className='loading'>
        <FaSpinner className='icon' />
      </div>
    )
  }
}

export default Loading;
