import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import TextInput from '../../components/TextInput';

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

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 0 0 8px;
`;


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
  }

  loginHandler(e) {
    const loginValue = e.target.value;
    this.setState({
      login: loginValue,
    });
  }

  passwordHandler(e) {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    const { login, password } = this.state;
    return (
      <FlexContainer justify="center" align="center">
        <LoginBox colored minWidth="320px">
          <form action="">
            <div>
              <Title>Авторизация</Title>
              <TextInput
                title="Логин:"
                name="login"
                inputValue={login}
                handleChange={this.loginHandler}
                placeholder="Введите логин"
              />
              <TextInput
                inputType="password"
                title="Пароль:"
                name="password"
                inputValue={password}
                handleChange={this.passwordHandler}
                placeholder="Введите пароль"
              />
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
