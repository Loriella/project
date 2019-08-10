/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputTitle from './styled/InputTitle';

const RadioBox = styled.div`
  margin: 0 0 6px;
`;

const RadioOption = styled.div`
  font-size: 12px;
  margin: 6px 0;
  
  label {
    margin: 0 18px;
  }
  input {
    margin: 0 8px 0;
  }
`;

const Radio = ({
  name, title, options, handleChange, inputValue,
}) => (
  <RadioBox>
    <InputTitle>{title}</InputTitle>
    <RadioOption>
      {options.map(option => (
        <label
          htmlFor={option.value}
          key={option.value}
          className="radioOption"
        >
          <input
            id={option.value}
            name={name}
            value={option.value}
            type="radio"
            onChange={handleChange}
            checked={option.value === inputValue}
          />
          {option.title}
        </label>
      ))}
    </RadioOption>
  </RadioBox>
);


Radio.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  handleChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Radio;
