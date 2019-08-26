import React from 'react';
import styled from 'styled-components';

import Search from './Search';
import StyledBox from './styled/StyledBox';

const HeaderBox = styled(StyledBox)`
  margin: 8px 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = props => (
  <HeaderBox>
    <div>Logo</div>
    <Search />
  </HeaderBox>
);

export default Header;
