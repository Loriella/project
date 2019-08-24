import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.div`
  width: 200px;
  height: 270px;
  padding: 10px;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfilePhoto = props => (
  <ImageBox>
    <ImageContainer>
      <img src="/img/avatar.jpg" alt="profile" />
    </ImageContainer>
  </ImageBox>
);

export default ProfilePhoto;
