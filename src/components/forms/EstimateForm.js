
import React from 'react';
import RowButton from '../RowButton';
import ExtendableForm from './ExtendableForm';
import Form from './Form';

import services from '../../data/services';

import './EstimateForm.scss';

class EstimateForm extends ExtendableForm {
  state = {
    name: '',
    email: '',
    tel: '',
    street: '',
    steetTwo: '',
    city: '',
    state: '',
    zip: '',
    serviceslist: [],
    additional: ''
  }

  render() {
    return (
      <Form name='estimate'>
        {({submit, setValue}) => (
          <React.Fragment>
            <div className='input-wrapper'>
              <h1 className='form-title'>Get a <span className='bolden'>free</span> estimate!</h1>

              <h3 className='form-title'>Where can we contact you?</h3>
              <input
                  type='text' 
                  name='name' 
                  placeholder='Name'
                  onChange={event => this.handleChange(event, setValue)}
                />
              <div className='input-container'>
                <input 
                  type='email' 
                  name='email' 
                  placeholder='Email' 
                  onChange={event => this.handleChange(event, setValue)}
                />
                <input 
                  type='tel' 
                  name='tel' 
                  placeholder='Phone' 
                  onChange={event => this.handleChange(event, setValue)}
                />
              </div>

              <h3 className='form-title'>Where do you want serviced?</h3>

              <input
                type='text' 
                name='street' 
                placeholder='Street Address'
                onChange={event => this.handleChange(event, setValue)}
              />

              <input
                type='text' 
                name='streetTwo' 
                placeholder='Street Address Line 2'
                onChange={event => this.handleChange(event, setValue)}
              />

              <input 
                type='text' 
                name='city' 
                placeholder='City' 
                onChange={event => this.handleChange(event, setValue)}
              />

              <div className='input-container'>
              <input 
                  type='text' 
                  name='state' 
                  placeholder='State' 
                  onChange={event => this.handleChange(event, setValue)}
                />
                <input 
                  type='number' 
                  name='zip' 
                  placeholder='Zipcode' 
                  onChange={event => this.handleChange(event, setValue)}
                />
              </div>

              <h3 className='form-title'>Select your services</h3>

              <ul className='service-list no-style'>
                {services.services.map((service, key) => (
                  <li key={key}>
                    <label>
                      <input
                        type='checkbox'
                        name='serviceslist'
                        value={service.name}
                        onChange={event => this.handleCheckChange(event, setValue)} 
                      />
                      {service.name}
                    </label>
                  </li>
                ))}
              </ul>

              <textarea 
                placeholder='Additional info...'
                name='additional'
                onChange={event => this.handleChange(event, setValue)}
              ></textarea>

              <RowButton noBG onClick={event => this.onSubmitClicked(event, submit)}>
                Get Free Estimate
              </RowButton>
            </div>
          </React.Fragment>
        )}
      </Form>
    )
  }
}

export default EstimateForm;
