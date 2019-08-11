import styled from 'styled-components';

const ErrorText = styled.div`
  color: #ff0000;
  font-size: ${props => props.size || '14px'};
  text-align: left;
  margin-bottom: 6px;
`;

export default ErrorText;
