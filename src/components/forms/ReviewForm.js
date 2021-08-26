
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

    submit(this.state);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Form name='review'>
        {({submit}) => (
          <React.Fragment>
            <input type="hidden" name="form-name" value="review" />
            <h2>Write a review</h2>
            <input
              type='text' 
              name='name' 
              placeholder='Name' 
              onChange={this.handleChange}
            />
            <input 
              type='email' 
              name='email' 
              placeholder='Email' 
              onChange={this.handleChange}
            />
            <textarea
              name='content'
              placeholder='Write your review...' 
              onChange={this.handleChange}
            />
            <button type="submit" onClick={event => this.onSubmitClicked(event, submit)}>Write Review</button>
          </React.Fragment>
        )}
      </Form>
    )
  }
}

export default ReviewForm;
