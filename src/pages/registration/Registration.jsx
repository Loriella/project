import React, { Component } from 'react';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Radio from '../../components/Radio';
import FlexContainer from '../../components/styled/FlexContainer';
import StyledBox from '../../components/styled/StyledBox';
import Title from '../../components/styled/Title';


class Registration extends Component {
  state = {
    lastName: '',
    firstName: '',
    middleName: '',
    city: '',
    dateOfBirth: '',
    login: '',
    password: '',
    repeatPassword: '',
    sexOptions: [
      {
        value: 'male',
        title: 'Мужской',
      },
      {
        value: 'female',
        title: 'Женский',
      },
    ],
    selectedSex: 'male',
    lastNameErrorMessage: '',
    firstNameErrorMessage: '',
    middleNameErrorMessage: '',
    cityErrorMessage: '',
    loginErrorMessage: '',
    passwordErrorMessage: '',
    repeatPasswordErrorMessage: '',
  };

  loginHandler = (e) => {
    const loginValue = e.target.value;
    this.setState({
      login: loginValue,
      loginErrorMessage: '',
    });
  };

  passwordHandler = (e) => {
    this.setState({
      password: e.target.value,
      passwordErrorMessage: '',
    });
  };

  repeatPasswordHandler = (e) => {
    this.setState({
      repeatPassword: e.target.value,
      repeatPasswordErrorMessage: '',
    });
  };

  lastNameHandler = (e) => {
    this.setState({
      lastName: e.target.value,
      lastNameErrorMessage: '',
    });
  };

  firstNameHandler = (e) => {
    this.setState({
      firstName: e.target.value,
      firstNameErrorMessage: '',
    });
  };

  middleNameHandler = (e) => {
    this.setState({
      middleName: e.target.value,
      middleNameErrorMessage: '',
    });
  };

  cityHandler = (e) => {
    this.setState({
      city: e.target.value,
      cityErrorMessage: '',
    });
  };

  dateOfBirthHandler = (e) => {
    this.setState({
      dateOfBirth: e.target.value,
    });
  };

  sexOptionsHandler = (e) => {
    this.setState({
      selectedSex: e.target.value,
    });
  };

  commonValidator = errorName => (e) => {
    if (!e.target.value) {
      this.setState({
        [errorName]: 'Заполните поле!',
      });
    }
  };

  loginValidator = (e) => {
    const loginValue = e.target.value;
    let errorMessage = '';
    if (!loginValue) {
      errorMessage = 'Заполните поле!';
    } else if (loginValue.length < 3) {
      errorMessage = 'Слишком короткий логин!';
    } else if (!/^[a-zA-Z\d]+$/.test(loginValue)) {
      errorMessage = 'Логин должен содержать символы: 0-9, a-z, A-Z';
    }
    this.setState({
      loginErrorMessage: errorMessage,
    });
  };

  passwordValidator = (e) => {
    const passwordValue = e.target.value;
    let errorMessage = '';
    if (!passwordValue) {
      errorMessage = 'Заполните поле!';
    } else if (passwordValue.length < 8) {
      errorMessage = 'Пароль должен содержать не менее 8 символов!';
    }
    this.setState({
      passwordErrorMessage: errorMessage,
    });
  };

  repeatPasswordValidator = (e) => {
    const passwordValue = e.target.value;
    const { password } = this.state;
    let errorMessage = '';
    if (passwordValue !== password) {
      errorMessage = 'Пароли не совпадают';
    }
    this.setState({
      repeatPasswordErrorMessage: errorMessage,
    });
  };

  render() {
    const {
      login,
      password,
      sexOptions,
      lastName,
      firstName,
      middleName,
      city,
      dateOfBirth,
      repeatPassword,
      selectedSex,
      lastNameErrorMessage,
      firstNameErrorMessage,
      middleNameErrorMessage,
      cityErrorMessage,
      loginErrorMessage,
      passwordErrorMessage,
      repeatPasswordErrorMessage,
    } = this.state;
    return (
      <FlexContainer justify="center" align="center">
        <StyledBox colored minWidth="320px">
          <form action="">
            <div>
              <Title>Впервые на сайте?</Title>
              <TextInput
                title="Фамилия:"
                inputValue={lastName}
                name="lastName"
                handleChange={this.lastNameHandler}
                placeholder="Иванов"
                errorMessage={lastNameErrorMessage}
                handleBlur={this.commonValidator('lastNameErrorMessage')}
              />
              <TextInput
                title="Имя:"
                inputValue={firstName}
                name="firstName"
                handleChange={this.firstNameHandler}
                placeholder="Василий"
                errorMessage={firstNameErrorMessage}
                handleBlur={this.commonValidator('firstNameErrorMessage')}
              />
              <TextInput
                title="Отчество:"
                inputValue={middleName}
                name="middleName"
                handleChange={this.middleNameHandler}
                placeholder="Петрович"
                errorMessage={middleNameErrorMessage}
                handleBlur={this.commonValidator('middleNameErrorMessage')}
              />
              <TextInput
                title="Дата рождения:"
                inputType="date"
                inputValue={dateOfBirth}
                name="dateOfBirth"
                handleChange={this.dateOfBirthHandler}
              />
              <TextInput
                title="Город:"
                inputValue={city}
                name="city"
                handleChange={this.cityHandler}
                placeholder="Город"
                errorMessage={cityErrorMessage}
                handleBlur={this.commonValidator('cityErrorMessage')}
              />
              <Radio
                title="Пол"
                name="sex"
                options={sexOptions}
                inputValue={selectedSex}
                handleChange={this.sexOptionsHandler}
              />
              <TextInput
                title="Логин:"
                name="newLogin"
                inputValue={login}
                handleChange={this.loginHandler}
                placeholder="Введите логин"
                errorMessage={loginErrorMessage}
                handleBlur={this.loginValidator}
              />
              <TextInput
                inputType="password"
                title="Пароль:"
                name="newPassword"
                inputValue={password}
                handleChange={this.passwordHandler}
                placeholder="Введите пароль"
                errorMessage={passwordErrorMessage}
                handleBlur={this.passwordValidator}
              />
              <TextInput
                inputType="password"
                title="Повторите пароль:"
                name="repeatPassword"
                inputValue={repeatPassword}
                handleChange={this.repeatPasswordHandler}
                placeholder="Повторите пароль"
                errorMessage={repeatPasswordErrorMessage}
                handleBlur={this.repeatPasswordValidator}
              />
              <Button
                title="Зарегистрироваться"
              />
            </div>
          </form>
        </StyledBox>
      </FlexContainer>
    );
  }
}

export default Registration;
