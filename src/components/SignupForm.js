import React, { Component } from "react";
import AuthApiService from "../services/auth";
import GroupForm from "./GroupForm.js";

class SignupForm extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, password, groupId } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      groupId: groupId.value,
    })
      .then((user) => {
        username.value = " ";
        password.value = " ";
        groupId.value = " ";
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <form className="registration" onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Register</h2>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="registration__hint"></div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="registration__control"
            name="username"
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="registration__control"
            name="password"
            id="password"
          />
        </div>
        <GroupForm />

        <div className="registration__button__group">
          <button type="reset" className="registration__button">
            Cancel
          </button>
          <button type="submit" className="registration__button">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
