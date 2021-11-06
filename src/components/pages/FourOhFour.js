
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './FourOhFour.scss';

function FourOhFour() {
  return (
    <div className='page page-four-oh-four'>
      <div className='four-oh-four-wrapper'>
        <h1><FaQuestion className='icon' /></h1>
        <Link to='/' className='no-style'>
          <h1 className='title'>Whoops, we couldn't find that page</h1>
          <h2 className='message'>Click here to return home</h2>
        </Link>
      </div>
    </div>
  );
}

export default FourOhFour;
