import React, { Component } from 'react';
import styled from 'styled-components';

const ProfileBox = styled.section`
 font-size: 14px;
 margin: 8px;
 padding: 0 8px 8px;
`;

const UserName = styled.h2`
  font-size: 16px;
`;

class Profile extends Component {
  state = {
    userName: 'Зеленкин Петр Иванович',
    dateOfBirth: '29 февраля 1985',
    sex: 'мужской',
    city: 'Москва',
  };

  render() {
    const {
      userName, dateOfBirth, sex, city,
    } = this.state;

    return (
      <ProfileBox>
        <UserName>{userName}</UserName>
        <div>
          Дата рождения:&nbsp;
          {dateOfBirth}
        </div>
        <div>
          Пол:&nbsp;
          {sex}
        </div>
        <div>
          Город:&nbsp;
          {city}
        </div>
      </ProfileBox>
    );
  }
}

export default Profile;
