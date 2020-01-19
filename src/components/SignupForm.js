import React, { Component } from "react";
import AuthApiService from "../services/auth";

class SignupForm extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const { username, password, groupId } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      groupId: groupId.value
    })
      .then(user => {
        username.value = " ";
        password.value = " ";
        groupId.calue = " ";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <form className="registration" onSubmit={this.handleSubmit}>
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
        <div className="form-group">
          <label htmlFor="groupId">Group ID</label>
          <input
            type="groupId"
            className="registration__control"
            name="groupId"
            id="groupId"
          />
        </div>

        <div className="registration__button__group">
          <button type="reset" className="registration__button">
            Cancel
          </button>
          <button type="submit" className="registration__button">
            Submit
          </button>
        </div>
        <a className="registration__button__new">New Group</a>
      </form>
    );
  }
}

export default SignupForm;
