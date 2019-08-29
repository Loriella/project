import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.div`
  width: 200px;
  height: 270px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  
  .menuContainer {
    width: 90%;
    position: absolute;
    top: 224px;
    padding: 8px;
    background-color: #a1eaa4;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 0 0 10px 10px;
    opacity: 0;
    transition: opacity .5s ease-in;

  }
  
  .menuText {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    user-select: none;
  }
  
  :hover .menuContainer {
    opacity: 1;
  }
  
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
    <div className="menuContainer">
      <div className="menuText">Изменить фото</div>
    </div>
  </ImageBox>
);

export default ProfilePhoto;
