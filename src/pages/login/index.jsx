import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  box-sizing: border-box;
  
  justify-content: ${props => props.justify || 'initial'};
  align-items: ${props => props.align || 'initial'};
`;

const StyledBox = styled.div`
  padding: 16px;
  border: 1px solid #a1eaa4;
  border-radius: 10px;
  box-sizing: border-box;
  
  min-width: ${props => props.minWidth || 'initial'};
  ${props => props.colored && css`
    background: #edf8ed;
  `}
`;

const LoginBox = styled(StyledBox)`
  padding: 32px 16px;
`;

class Login extends Component {
  render() {
    return (
      <FlexContainer justify="center" align="center">
        <LoginBox colored minWidth="320px">
          <form action="">
            <div>
              <h1>Авторизация</h1>
              <div>
                <label htmlFor="login">
                  <div>Логин:</div>
                  <input id="login" type="text" />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  <div>Пароль:</div>
                  <input id="password" type="password" />
                </label>
              </div>
              <button type="submit">Login</button>
            </div>
          </form>
          <div>
            <p>Нет аккаунта?</p>
            <a href="/">Зарегистрироваться</a>
          </div>
        </LoginBox>
      </FlexContainer>
    );
  }
}

export default Login;
