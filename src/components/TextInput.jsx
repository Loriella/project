/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputTitle from './styled/InputTitle';
import Input from './styled/Input';
import ErrorText from './styled/ErrorText';

const ErrorTextMessage = styled(ErrorText)`
  margin-left: 8px;
`;

const TextInput = ({
  inputType, name, placeholder, inputValue, handleChange, title, errorMessage, handleBlur, ...props
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
        onBlur={handleBlur}
        placeholder={placeholder}
        {...props}
      />
    </label>
    {errorMessage && <ErrorTextMessage size="10px">{errorMessage}</ErrorTextMessage>}
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,

  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
};
TextInput.defaultProps = {
  placeholder: '',
  inputType: 'text',
  errorMessage: '',
  handleBlur: () => null,
};

export default TextInput;
