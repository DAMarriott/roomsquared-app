import React, { Component } from "react";
import SigninForm from "../components/SigninForm";

export default class SigninPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleSigninSuccess = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <section className="SigninPage">
        <p>Welcome back.</p>
        <SigninForm
          updateLoginState={this.props.updateLoginState}
          onSigninSuccess={this.handleSigninSuccess}
        />
      </section>
    );
  }
}
