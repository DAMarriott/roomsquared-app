import React, { Component } from "react";
import { login } from "../services/auth";

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  updatePassword(password) {
    this.setState({
      password: { value: password, touched: true }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, password } = this.state;
    login(name, password).then(res => console.log(res));
  }

  validateName() {
    const name = this.state.name.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }

  validatePassword() {
    const password = this.state.password.trim();
    if (password.length === 0) {
      return "Password is required";
    } else if (password.length < 6 || password.length > 72) {
      return "Password must be between 6 and 72 characters long";
    }
  }

  render() {
    const nameError = this.validateName();
    const passwordError = this.validatePassword();

    return (
      <form className="registration" onSubmit={e => this.handleSubmit(e)}>
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="registration__control"
            name="username"
            id="username"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="registration__control"
            name="password"
            id="password"
            onChange={e => this.setState({ password: e.target.value })}
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

export default SigninForm;
