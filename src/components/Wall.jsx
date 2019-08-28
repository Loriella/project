import React from 'react';
import styled from 'styled-components';
import FlexContainer from './styled/FlexContainer';
import Button from './Button';


const WallContainer = styled.section`
  padding: 16px;
    .wallHeader {
      margin-bottom: 8px;
    }
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 14px;
  width: 100%;
`;

const ImgButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  line-height: 0;
  cursor: pointer;
  outline: none;
  width: 18px;
  height: 18px;
  
  color: #a1eaa4;
`;

const NoteBox = styled.div`
  border: 1px solid #a1eaa4;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
`;

const NoteTitle = styled.h3`
  font-size: 14px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PublicationDate = styled.span`
  font-size: 10px;
  color: #a1eaa4;
`;

const NoteText = styled.div`
  font-size: 12px;
  margin: 0;
  padding: 8px 0;
`;

const NotePhoto = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  
  img {
    position:absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NoteEditor = styled.div`
  border: 1px solid #a1eaa4;
  border-radius: 12px;
  padding: 16px;
  
    .width {
      width: 200px;
    }
`;

const NoteEditorText = styled(NoteText)`
  border: 1px solid #a1eaa4;
  border-radius: 12px;
  margin: 8px 0;
  padding: 8px;

`;

const AddPhoto = styled.button`
  border: 1px solid #a1eaa4;
  border-radius: 12px;
  padding: 8px 8px 8px 30px;
  background-color: #a1eaa4;
  font-size: 15px;
  font-weight: bold;
  vertical-align: middle;
  position: relative;
  
  img {
    width: 18px;
    position: absolute;
    left: 24px;
    top: 6px;
  }
  outline: none;
  
  :hover {
    background: linear-gradient(#a1eaa4, #f0f0f0);
    transition: background .5s ease-in-out;
  }
  
  :active {
    background: #F0F0F0;
    box-shadow: inset 0 0 3px 4px rgba(161,234,164,0.55);
    transition: all .3s ease-in-out;
  }
  
  :focus {
    box-shadow: 0 0 3px 2px rgba(161,234,164,0.55);
  }
`;

const Wall = props => (
  <WallContainer>
    <div className="wallHeader">
      <FlexContainer align="center">
        <SectionTitle>Стена:</SectionTitle>
        <ImgButton type="button">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="pencil-alt"
            className="svg-inline--fa fa-pencil-alt fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
            />
          </svg>
        </ImgButton>
      </FlexContainer>
    </div>
    <NoteBox>
      <NoteTitle>
        Зеленкин Петр Иванович
        <PublicationDate>
          25 августа 2019
        </PublicationDate>
      </NoteTitle>
      <NoteText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aspernatur cumque cupiditate doloribus
        dolorum eligendi, eum explicabo fuga harum id ipsa
        modi nam neque nisi officiis optio qui quidem,
        ullam velit.
      </NoteText>
    </NoteBox>
    <NoteBox>
      <NoteTitle>
        Зеленкин Петр Иванович
        <PublicationDate>
          25 мая 2019
        </PublicationDate>
      </NoteTitle>
      <NoteText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </NoteText>
      <NotePhoto>
        <img src="https://i.pinimg.com/736x/2d/dc/25/2ddc25914e2ae0db5311ffa41781dda1.jpg" />
      </NotePhoto>
    </NoteBox>
    <NoteEditor>
      <NoteTitle>
        Зеленкин Петр Иванович
        <PublicationDate />
      </NoteTitle>
      <NoteEditorText>
        Чем хотите поделиться?
      </NoteEditorText>
      <FlexContainer align="center" justify="space-between">
        <AddPhoto className="width">
          <img src="/img/camera.svg" />&nbsp;
          Добавить фото
        </AddPhoto>
        <Button title="Поделиться" className="width" />
      </FlexContainer>
    </NoteEditor>
  </WallContainer>
);

export default Wall;
