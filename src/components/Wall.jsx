import React from 'react';
import styled from 'styled-components';


const WallContainer = styled.section`
  padding: 16px;
`;

const SectionTitle = styled.h2`
  margin: 0 0 12px;
  font-size: 14px;
  width: 100%;
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
  padding: 8px;
`;

const NotePhoto = styled.div`
  
  img {
    width: 600px;
    height: 600px;
    object-fit: cover;
  }
`;

const Wall = props => (
  <WallContainer>
    <SectionTitle>Стена:</SectionTitle>
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
        <img src="http://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg" />
      </NotePhoto>
    </NoteBox>
  </WallContainer>
);

export default Wall;
