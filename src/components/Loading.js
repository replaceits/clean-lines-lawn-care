
import { FaSpinner } from 'react-icons/fa';

import './Loading.scss';

function Loading() {
  return (
    <div className='loading'>
      <FaSpinner className='icon' />
    </div>
  );
}

export default Loading;
