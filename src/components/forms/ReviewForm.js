
import React from 'react';
import Form from './Form';

import './ReviewForm.scss';

class ReviewForm extends React.Component {
  state = {
    name: '',
    email: '',
    content: ''
  }

  onSubmitClicked(event, submit) {
    event.preventDefault();

    submit({
      ...this.state
    });
  }

  handleChange = (event, setValue) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });

    setValue(name, value);
  }

  render() {
    return (
      <Form name='review'>
        {({submit, setValue}) => (
          <React.Fragment>
            <h2>Write a review</h2>
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
            <textarea
              name='content'
              placeholder='Write your review...' 
              onChange={event => this.handleChange(event, setValue)}
            />
            <button type="submit" onClick={event => this.onSubmitClicked(event, submit)}>Write Review</button>
          </React.Fragment>
        )}
      </Form>
    )
  }
}

export default ReviewForm;
