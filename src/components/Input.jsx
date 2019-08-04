import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  inputType, name, placeholder, inputValue, handleChange, title, ...props
}) => (
  <div>
    <label htmlFor={name} className="form-label">
      <div>{title}</div>
      <input
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

Input.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,

  handleChange: PropTypes.func.isRequired,
};
Input.defaultProps = {
  placeholder: '',
  inputType: 'text',
};

export default Input;
