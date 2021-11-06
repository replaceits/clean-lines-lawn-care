
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';
import EstimateForm from '../forms/EstimateForm';
import MessageBox from '../MessageBox';

function FreeEstimate({history}) {
  return (
    <div className='page page-estimate'>
      <Switch>
        <Route exact path='/free-estimate' component={EstimateForm} />

        <Route path='/free-estimate/success'>
          {history.action !== 'PUSH' ? <Redirect to='/reviews' /> : null}
          <MessageBox 
            icon={<FaCheckCircle />}
            title='We will get back to you with your free estimate shortly.'
            content={
              <Link to='/' className='no-style'>
                Click here to return to the home page
              </Link>
            }
            theme='success'
          />
        </Route>

        <Route path='/free-estimate/error'>
          {history.action !== 'PUSH' ? <Redirect to='/reviews' /> : null}
          <MessageBox 
            icon={<FaExclamationTriangle />}
            title='Whoops, something went wrong.'
            content={
              <Link to='/free-estimate' className='no-style'>
                Please click here to try again and get your free estimate.
              </Link>
            }
            theme='error'
          />
        </Route>

        <Redirect to="/free-estimate" />
      </Switch>
    </div>
  )
}

export default withRouter(FreeEstimate);
