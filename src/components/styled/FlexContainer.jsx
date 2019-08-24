import styled from 'styled-components';

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  box-sizing: border-box;
  
  justify-content: ${props => props.justify || 'initial'};
  align-items: ${props => props.align || 'initial'};
`;

export default FlexContainer;
