
import React from 'react';

class ExtendableForm extends React.Component {
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
}

export default ExtendableForm;
