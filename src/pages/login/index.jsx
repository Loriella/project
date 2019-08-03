import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
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
        </div>
      </div>
    );
  }
}

export default Login;
