import React, { Component } from 'react';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Radio from '../../components/Radio';
import FlexContainer from '../../components/styled/FlexContainer';
import StyledBox from '../../components/styled/StyledBox';
import Title from '../../components/styled/Title';


class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.repeatPasswordHandler = this.repeatPasswordHandler.bind(this);
    this.lastNameHandler = this.lastNameHandler.bind(this);
    this.firstNameHandler = this.firstNameHandler.bind(this);
    this.middleNameHandler = this.middleNameHandler.bind(this);
    this.cityHandler = this.cityHandler.bind(this);
    this.dateOfBirthHandler = this.dateOfBirthHandler.bind(this);
    this.sexOptionsHandler = this.sexOptionsHandler.bind(this);
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

  repeatPasswordHandler(e) {
    this.setState({
      repeatPassword: e.target.value,
    });
  }

  lastNameHandler(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  firstNameHandler(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  middleNameHandler(e) {
    this.setState({
      middleName: e.target.value,
    });
  }

  cityHandler(e) {
    this.setState({
      city: e.target.value,
    });
  }

  dateOfBirthHandler(e) {
    this.setState({
      dateOfBirth: e.target.value,
    });
  }

  sexOptionsHandler(e) {
    this.setState({
      selectedSex: e.target.value,
    });
  }

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
              />
              <TextInput
                title="Имя:"
                inputValue={firstName}
                name="firstName"
                handleChange={this.firstNameHandler}
                placeholder="Василий"
              />
              <TextInput
                title="Отчество:"
                inputValue={middleName}
                name="middleName"
                handleChange={this.middleNameHandler}
                placeholder="Петрович"
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
              />
              <TextInput
                inputType="password"
                title="Пароль:"
                name="newPassword"
                inputValue={password}
                handleChange={this.passwordHandler}
                placeholder="Введите пароль"
              />
              <TextInput
                inputType="password"
                title="Повторите пароль:"
                name="repeatPassword"
                inputValue={repeatPassword}
                handleChange={this.repeatPasswordHandler}
                placeholder="Повторите пароль"
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
