import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from '../../components/Menu';
import ProfilePhoto from '../../components/ProfilePhoto';
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

const Profile = styled.section`
 font-size: 14px;
 margin: 8px;
`;

const UserName = styled.h2`
  font-size: 16px;
  margin: 6px 0;
`;

const AboutMyself = styled.section`
   margin: 8px;
`;

const SectionTitle = styled.h2`
  font-size: 14px;
  margin: 6px 0;
  width: 100%;
`;

const AboutMyselfText = styled.div`
  font-size: 14px;
`;

const Gallery = styled.section`
  height: 158px;
  margin: 8px;
`;

const Wall = styled.section`
  margin: 8px;
`;


// eslint-disable-next-line react/prefer-stateless-function
class UserPage extends Component {
  render() {
    return (
      <ProfileBox colored maxWidth="960px">
        <Header>
          <input type="search" />
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
              <Profile>
                <UserName>Фамилия Имя Отчество</UserName>
                <div>День рождения: 29 февраля 1985</div>
                <div>Пол: мужской</div>
                <div>Город: Москва</div>
              </Profile>
            </StyledBoxMini>
            <StyledBoxMini>
              <AboutMyself>
                <FlexContainer>
                  <SectionTitle>О себе:</SectionTitle>
                  <button type="button">Редактировать</button>
                </FlexContainer>
                <AboutMyselfText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur cumque cupiditate doloribus
                  dolorum eligendi, eum explicabo fuga harum id ipsa
                  modi nam neque nisi officiis optio qui quidem,
                  ullam velit.
                </AboutMyselfText>
              </AboutMyself>
            </StyledBoxMini>
            <StyledBoxMini>
              <Gallery>
                <SectionTitle>Галерея</SectionTitle>
              </Gallery>
            </StyledBoxMini>
            <StyledBoxMini>
              <Wall>
                <SectionTitle>Стена:</SectionTitle>
              </Wall>
            </StyledBoxMini>
          </RightColumn>
        </FlexContainer>
      </ProfileBox>
    );
  }
}

export default UserPage;
