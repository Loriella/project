import React from 'react';
import styled from 'styled-components';

import StyledBox from '../../components/styled/StyledBox';

import Header from '../../components/Header';

const MessagesContainer = styled(StyledBox)`
  margin: 8px auto;
`;

const MessagesBox = styled(StyledBox)`
  margin: 8px 8px 16px;
`;

const MessagesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  
  li {
   padding: 8px;
   margin: 8px 8px 16px;
   border: 1px solid #a1eaa4;
   border-radius: 10px;
   
    .container {
      display: flex;
      justify-content: space-between;
      padding: 8px;
      
    }
    .author {
      font-size: 14px;
    }
    .answerAuthor {
      color: #a1eaa4;
    }
    .date {
      font-size: 12px;
      color: #a1eaa4;
    }
    .textMessage {
      font-size: 14px;
      padding: 8px;
    }
    .new {
      background-color:#edf8ed;
    }
  }
`;

const Messages = props => (
  <MessagesContainer colored maxWidth="960px">
    <Header />
    <MessagesBox>
      <MessagesList>
        <li>
          <div className="container">
            <div className="author">Зеленкин Петр</div>
            <div className="date">25 августа</div>
          </div>
          <div className="textMessage new">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur cumque cupiditate doloribus
            dolorum eligendi, eum explicabo fuga harum id ipsa
          </div>
        </li>
        <li>
          <div className="container">
            <div className="author">Зеленкин Петр</div>
            <div className="date">25 августа</div>
          </div>
          <div className="textMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur cumque cupiditate doloribus
            dolorum eligendi, eum explicabo fuga harum id ipsa
            Aspernatur cumque cupiditate doloribus
            dolorum eligendi, eum explicabo fuga harum id ipsa
          </div>
        </li>
        <li>
          <div className="container">
            <div className="author">Зеленкин Петр</div>
            <div className="date">25 августа</div>
          </div>
          <div className="textMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur cumque cupiditate doloribus
            Aspernatur cumque cupiditate doloribus
            dolorum eligendi, eum explicabo fuga harum id ipsa
          </div>
          <div className="container">
            <div className="author answerAuthor">Иванов Василий</div>
            <div className="date">25 августа</div>
          </div>
          <div className="textMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur cumque cupiditate doloribus
            Aspernatur cumque cupiditate doloribus
            dolorum eligendi, eum explicabo fuga harum id ipsa
          </div>
        </li>
      </MessagesList>
    </MessagesBox>
  </MessagesContainer>
);

export default Messages;
