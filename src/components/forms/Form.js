
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Path from 'path';

import './Form.scss';

class Form extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

  submit = (data) => {
    fetch('/post/review', {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        'form-name': this.props.name,
        ...data
      })
    }).then(res => {
      if (!res.ok) throw new Error('Invalid form submission');
      
      this.props.history.push(Path.join(this.props.location.pathname, 'success'))
    }).catch(error => {
      this.props.history.push(Path.join(this.props.location.pathname, 'error'))
    })
  }

  render() {
    return (
      <form
        name={this.props.name}
        className='form' 
        data-netlify='true'
      >
        {this.props.children({submit: this.submit})}
      </form>
    );
  }
}

export default withRouter(Form);
