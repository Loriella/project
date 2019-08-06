import styled, { css } from 'styled-components';

const StyledBox = styled.div`
  padding: 16px;
  border: 1px solid #a1eaa4;
  border-radius: 10px;
  box-sizing: border-box;
  
  min-width: ${props => props.minWidth || 'initial'};
  ${props => props.colored && css`
    background: #edf8ed;
  `}
`;

export default StyledBox;
