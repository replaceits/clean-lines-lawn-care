
import React from 'react';

import './ReviewForm.scss';

class ReviewForm extends React.Component {
  render() {
    return (
      <form 
        name='review'
        className='review-form' 
        data-netlify='true'
      >
        <input type="hidden" name="form-name" value="review" />
        <h2>Write a review</h2>
        <input type='text' name='name' placeholder='Name'></input>
        <input type='email' name='email' placeholder='Email'></input>
        <textarea name='content' placeholder='Write your review...' />
        <button type="submit">Write Review</button>
      </form>
    )
  }
}

export default ReviewForm;
