import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PrimaryButton = styled.button`
  background-color: #a1eaa4;
  border: 1px solid #a1eaa4;
  border-radius: 10px;
  width: 100%;
  padding: 8px;
  font-size: 15px;
  font-weight: bold;
  margin: 16px 0;
  outline: none;
  
  :hover {
    background: linear-gradient(#a1eaa4, #f0f0f0);
    transition: background .5s ease-in-out;
  }
  
  :active {
    background: #F0F0F0;
    box-shadow: inset 0 0 3px 4px rgba(161,234,164,0.55);
    transition: all .3s ease-in-out;
  }
  
  :focus {
    box-shadow: 0 0 3px 2px rgba(161,234,164,0.55);
  }
`;

const Button = ({ title, ...props }) => (
  <PrimaryButton {...props}>{title}</PrimaryButton>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
