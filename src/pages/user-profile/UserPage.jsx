import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from '../../components/Menu';
import ProfilePhoto from '../../components/ProfilePhoto';
import Profile from '../../components/Profile';
import AboutMyself from '../../components/AboutMyself';
import Search from '../../components/Search';
import Gallery from '../../components/Gallery';
import Wall from '../../components/Wall';

import StyledBox from '../../components/styled/StyledBox';

const ProfileBox = styled(StyledBox)`
  margin: 8px auto;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const LeftColumn = styled.aside`
  width: 230px;
`;

const RightColumn = styled.main`
  width: 100%;
`;

const Header = styled(StyledBox)`
  margin: 8px 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledBoxMini = styled(StyledBox)`
  margin: 16px 8px;
  padding: 0;
  
  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 8px;
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class UserPage extends Component {
  render() {
    return (
      <ProfileBox colored maxWidth="960px">
        <Header>
          <div>Logo</div>
          <Search />
        </Header>
        <FlexContainer>
          <LeftColumn>
            <StyledBoxMini>
              <ProfilePhoto />
            </StyledBoxMini>
            <StyledBoxMini>
              <Menu />
            </StyledBoxMini>
          </LeftColumn>
          <RightColumn>
            <StyledBoxMini>
              <Profile />
            </StyledBoxMini>
            <StyledBoxMini>
              <AboutMyself />
            </StyledBoxMini>
            <StyledBoxMini>
              <Gallery />
            </StyledBoxMini>
            <StyledBoxMini>
              <Wall />
            </StyledBoxMini>
          </RightColumn>
        </FlexContainer>
      </ProfileBox>
    );
  }
}

export default UserPage;
