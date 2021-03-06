
import React from 'react';
import RowButton from '../RowButton';
import ExtendableForm from './ExtendableForm';
import Form from './Form';

import './ReviewForm.scss';

class ReviewForm extends ExtendableForm {
  state = {
    name: '',
    email: '',
    content: ''
  }

  render() {
    return (
      <Form name='review'>
        {({submit, setValue}) => (
          <React.Fragment>
            <div className='input-wrapper'>
              <h1 className='form-title'>Write a review</h1>
              <div className='input-container'>
                <input
                  type='text' 
                  name='name' 
                  placeholder='Name'
                  onChange={event => this.handleChange(event, setValue)}
                />
                <input 
                  type='email' 
                  name='email' 
                  placeholder='Email' 
                  onChange={event => this.handleChange(event, setValue)}
                />
              </div>
              <textarea
                name='content'
                className='submit-button'
                placeholder='Write your review...' 
                onChange={event => this.handleChange(event, setValue)}
              />
              <RowButton noBG onClick={event => this.onSubmitClicked(event, submit)}>
                Write Review
              </RowButton>
            </div>
          </React.Fragment>
        )}
      </Form>
    )
  }
}

export default ReviewForm;
