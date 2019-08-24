import styled, { css } from 'styled-components';

const StyledBox = styled.div`
  padding: 8px 8px;
  border: 1px solid #a1eaa4;
  border-radius: 10px;
  box-sizing: border-box;
  background: #ffffff;
  overflow: hidden;

  
  max-width: ${props => props.maxWidth || 'initial'};
  min-width: ${props => props.minWidth || 'initial'};
  ${props => props.colored && css`
    background: #edf8ed;
  `}
`;

export default StyledBox;
