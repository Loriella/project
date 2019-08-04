/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #a1eaa4;
  border-radius: 10px;
  padding: 12px 8px;
  margin: 6px 0;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  
  :focus {
    box-shadow: 0 0 3px 2px rgba(161,234,164,0.55);
  }
`;

const InputTitle = styled.div`
  font-size: 14px;
  padding: 0 8px;
`;


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
