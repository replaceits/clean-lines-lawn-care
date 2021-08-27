
import React from 'react';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';
import ContactForm from '../forms/ContactForm';
import MessageBox from '../MessageBox';

class ContactUs extends React.Component {
  render() {
    return (
      <div className='page page-contact-us'>
        <Switch>
          <Route exact path='/contact-us' component={ContactForm} />

          <Route path='/contact-us/success'>
            {this.props.history.action !== 'PUSH' ? <Redirect to='/reviews' /> : null}
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

          <Route path='/contact-us/error'>
            {this.props.history.action !== 'PUSH' ? <Redirect to='/reviews' /> : null}
            <MessageBox 
              icon={<FaExclamationTriangle />}
              title='Whoops, something went wrong.'
              content={
                <Link to='/contact-us' className='no-style'>
                  Please click here to try contacting us again.
                </Link>
              }
              theme='error'
            />
          </Route>

          <Redirect to="/contact-us" />
        </Switch>
      </div>
    )
  }
}

export default withRouter(ContactUs);
