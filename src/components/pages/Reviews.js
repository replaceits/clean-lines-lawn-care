
import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import ReviewForm from '../forms/ReviewForm';
import ReviewsGrid from '../ReviewsGrid';
import RowButton from '../RowButton';

import './Reviews.scss';

class Reviews extends React.Component {
  render() {
    return (
      <div className='page page-reviews'>
        <Switch>
          <Route exact path='/reviews'>
            <ReviewsGrid enablePages />
            <RowButton to='/reviews/new' noBG>Write a review</RowButton>
          </Route>

          <Route exact path='/reviews/new'>
            <ReviewForm />
          </Route>

          <Route path='/reviews/new/success'>
            {this.props.history.action !== 'PUSH' ? <Redirect to='/reviews' /> : null}
            Success
          </Route>

          <Route path='/reviews/new/error'>
            {this.props.history.action !== 'PUSH' ? <Redirect to='/reviews' /> : null}
            Something went wrong
          </Route>

          <Redirect to="/reviews" />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Reviews);
