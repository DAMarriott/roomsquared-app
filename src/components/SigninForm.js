import React, { Component } from "react";
import AuthApiService from "../services/auth";

export default class SigninForm extends React.Component {
  static defaultProps = {
    onSigninSuccess: () => {}
  };

  state = { error: null };

  handleSubmitBasicAuth = ev => {
    ev.preventDefault();
    const { username, password } = ev.target;

    this.setState({ error: null });
    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(user => {
        username.value = " ";
        password.value = " ";
        this.props.onSigninSuccess();
        console.log(user);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <form
        className="registration"
        onSubmit={e => this.handleSubmitBasicAuth(e)}
      >
        <h2>Sign In</h2>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="registration__control"
            name="username"
            id="username"
            defaultValue="dm"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="registration__control"
            name="password"
            id="password"
            defaultValue="12345678"
          />
        </div>
        <div className="login__button__group">
          <button type="submit" className="login__button">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
