
import React from 'react';
import RowButton from '../RowButton';
import ExtendableForm from './ExtendableForm';
import Form from './Form';

import './ContactForm.scss';
import ContactInfo from '../ContactInfo';

class ContactForm extends ExtendableForm {
  state = {
    name: '',
    email: '',
    content: ''
  }

  render() {
    return (
      <Form name='contact'>
        {({submit, setValue}) => (
          <React.Fragment>
            <div className='input-wrapper'>
              <h1 className='form-title'>Contact Us</h1>

              <span className='bolden'>
                <ContactInfo theme='blue' />
              </span>

              <span className='alternatively-wrapper'>
                <h3 className='alternatively'>Alternatively</h3>
              </span>

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
                placeholder='Write your message...' 
                onChange={event => this.handleChange(event, setValue)}
              />
              <RowButton noBG onClick={event => this.onSubmitClicked(event, submit)}>
                Write Contact
              </RowButton>
            </div>
          </React.Fragment>
        )}
      </Form>
    )
  }
}

export default ContactForm;
