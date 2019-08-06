/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './styled/InputTitle';
import Input from './styled/Input';


const TextInput = ({
  inputType, name, placeholder, inputValue, handleChange, title, ...props
}) => (
  <div>
    <label htmlFor={name}>
      <InputTitle>{title}</InputTitle>
      <Input
        id={name}
        name={name}
        type={inputType}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        {...props}
      />
    </label>
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,

  handleChange: PropTypes.func.isRequired,
};
TextInput.defaultProps = {
  placeholder: '',
  inputType: 'text',
};

export default TextInput;
