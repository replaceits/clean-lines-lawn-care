
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

  handleCheckChange = (event, setValue) => {
    const {name, value, checked} = event.target;

    this.setState((state) => {
      if (checked) {
        if (!state[name]) {
          setValue(name, [value]);
          return {[name]: [value]};
        }

        setValue(name, [...state[name], value]);
        return {[name]: [...state[name], value]};
      }

      const filteredValues = state[name].filter(val => val !== value);

      setValue(name, filteredValues)
      return {[name]: filteredValues}
    });
  }
}

export default ExtendableForm;
