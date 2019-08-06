import React, { Component } from 'react';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import FlexContainer from '../../components/styled/FlexContainer';
import StyledBox from '../../components/styled/StyledBox';
import Title from '../../components/styled/Title';
import ErrorText from '../../components/styled/ErrorText';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      hasError: false,
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
    const { login, password, hasError } = this.state;
    return (
      <FlexContainer justify="center" align="center">
        <StyledBox colored minWidth="320px">
          <form action="">
            <div>
              <Title>Авторизация</Title>
              {hasError && <ErrorText>Неверно введен логин или пароль</ErrorText>}
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
              <Button
                title="Войти"
              />
            </div>
          </form>
        </StyledBox>
      </FlexContainer>
    );
  }
}

export default Login;
