
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Path from 'path';

import './Form.scss';

class Form extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  state = {
    values: {}
  }

  setValue = (name, value) => {
    this.setState(({values}) => ({
      values: {
        ...values,
        [name]: value
      }
    }));
  }

  encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

  submit = () => {
    fetch('/post/form-submission', {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        'form-name': this.props.name,
        ...this.state.values
      })
    }).then(res => {
      if (!res.ok) throw new Error('Invalid form submission');

      this.props.history.push(Path.join(this.props.location.pathname, 'success'));
    }).catch(error => {
      this.props.history.push(Path.join(this.props.location.pathname, 'error'));
    })
  }

  render() {
    return (
      <form
        name={this.props.name}
        className='form' 
        data-netlify='true'
        onSubmit={this.submit}
      >
        <input type="hidden" name="form-name" value={this.props.name} />
        {this.props.children({submit: this.submit, setValue: this.setValue})}
      </form>
    );
  }
}

export default withRouter(Form);
