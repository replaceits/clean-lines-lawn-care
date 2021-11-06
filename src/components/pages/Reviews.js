
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';

import ReviewForm from '../forms/ReviewForm';
import MessageBox from '../MessageBox';
import ReviewsGrid from '../ReviewsGrid';
import RowButton from '../RowButton';

import './Reviews.scss';

function Reviews({history}) {
  return (
    <div className='page page-reviews'>
      <Switch>
        <Route exact path='/reviews'>
          <ReviewsGrid itemsPerPage={20} />
          <RowButton noBG to='/reviews/new'>Write a review</RowButton>
        </Route>

        <Route exact path='/reviews/new'>
          <ReviewForm />
        </Route>

        <Route path='/reviews/new/success'>
          {history.action !== 'PUSH' ? <Redirect to='/reviews' /> : null}
          <MessageBox 
            icon={<FaCheckCircle />}
            title='Your reviews been submitted!'
            content={
              <Link to='/' className='no-style'>
                Click here to return to the home page
              </Link>
            }
            theme='success'
          />
        </Route>

        <Route path='/reviews/new/error'>
          {history.action !== 'PUSH' ? <Redirect to='/reviews' /> : null}
          <MessageBox 
            icon={<FaExclamationTriangle />}
            title='Whoops, something went wrong.'
            content={
              <Link to='/reviews/new' className='no-style'>
                Please click here to submit your review again
              </Link>
            }
            theme='error'
          />
        </Route>

        <Redirect to="/reviews" />
      </Switch>
    </div>
  );
}

export default withRouter(Reviews);
