import React, { Component } from 'react';
import styled from 'styled-components';

const MenuBox = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  user-select: none;
  
  li {
    padding: 8px;
    display: flex;
    justify-content: space-between;
    line-height: 26px;
    cursor: pointer;
    
    :hover {
      background-color: #edf8ed;
    }
  }
  
  a {
    text-decoration: none;
    color: #000;

  }
`;

const CountStyle = styled.div`
  width: 26px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid #a1eaa4;
  border-radius: 6px;
  box-sizing: border-box;
`;

class Menu extends Component {
  state = {
    friendCount: 5,
    messageCount: 0,
    chatsCount: 0,
  };

  render() {
    const { friendCount, messageCount, chatsCount } = this.state;
    return (
      <MenuBox>
        <nav>
          <List>
            <li>
              <a href="#">Мой профиль</a>
            </li>
            <li>
              <a href="#">Друзья</a>
              {!!friendCount && <CountStyle>{friendCount}</CountStyle>}
            </li>
            <li>
              <a href="#">Сообщения</a>
              {!!messageCount && <CountStyle>{messageCount}</CountStyle>}
            </li>
            <li>
              <a href="#">Чаты</a>
              {!!chatsCount && <CountStyle>{chatsCount}</CountStyle>}
            </li>
            <li>
              <a href="#">Настройки</a>
            </li>
          </List>
        </nav>
      </MenuBox>
    );
  }
}

export default Menu;
