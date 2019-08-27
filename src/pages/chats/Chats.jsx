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
    .titleChat {
      font-size: 14px;
    }
    .titleChatActive {
      font-size: 16px;
      margin: 8px;
    }
    .description {
      font-size: 12px;
      margin-left: 8px;
      margin-bottom: 8px;
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
    .message {
      border: 1px solid #a1eaa4;
      border-radius: 10px;
      margin-top: 8px;
    }
    .answer {
      border: 1px solid #a1eaa4;
      border-radius: 10px;
      margin-top: 16px;
      padding: 8px;
    }
    .quote {
      border-left: 1px solid #a1eaa4;
      margin-left: 16px;
    }
  }
`;

const Chats = props => (
  <MessagesContainer colored maxWidth="960px">
    <Header />
    <MessagesBox>
      <MessagesList>
        <li>
          <div className="container">
            <div className="titleChat">Поболтать</div>
          </div>
          <div className="textMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur cumque cupiditate doloribus
            dolorum eligendi, eum explicabo fuga harum id ipsa
          </div>
        </li>
        <li>
          <div className="container">
            <div className="titleChat">О погоде</div>
          </div>
          <div className="textMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur cumque cupiditate doloribus
            dolorum eligendi, eum explicabo fuga harum id ipsa
            Aspernatur cumque cupiditate doloribus
            dolorum eligendi, eum explicabo fuga harum id ipsa
          </div>
        </li>
        <li>
          <div className="titleChatActive">О закупках</div>
          <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur cumque cupiditate doloribus
            Aspernatur cumque cupiditate doloribus
            dolorum eligendi, eum explicabo fuga harum id ipsa
          </div>
          <div className="message">
            <div className="container">
              <div className="titleChat">Иванов Василий</div>
              <div className="date">25 августа</div>
            </div>
            <div className="textMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur cumque cupiditate doloribus
              Aspernatur cumque cupiditate doloribus
              dolorum eligendi, eum explicabo fuga harum id ipsa
            </div>
          </div>
          <div className="answer">
            <div className="container">
              <div className="author">Зеленкин Петр</div>
              <div className="date">25 августа</div>
            </div>
            <div className="quote">
              <div className="container">
                <div className="titleChat">Иванов Василий</div>
              </div>
              <div className="textMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur cumque cupiditate doloribus
                Aspernatur cumque cupiditate doloribus
                dolorum eligendi, eum explicabo fuga harum id ipsa
              </div>
            </div>
            <div className="textMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur cumque cupiditate doloribus
              dolorum eligendi, eum explicabo fuga harum id ipsa
              Aspernatur cumque cupiditate doloribus
              dolorum eligendi, eum explicabo fuga harum id ipsa
            </div>
          </div>
        </li>
      </MessagesList>
    </MessagesBox>
  </MessagesContainer>
);

export default Chats;
