import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #a1eaa4;
  border-radius: 10px;
  padding: 8px;
  margin: 6px 0;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  
  :focus {
    box-shadow: 0 0 3px 2px rgba(161,234,164,0.55);
  }
`;

export default Input;
