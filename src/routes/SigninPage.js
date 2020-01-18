import React, { Component } from "react";
import SigninForm from "../components/SigninForm";

export default class SigninPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleSigninSuccess = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <section className="SigninPage">
        <h2>Sign in</h2>
        <SigninForm onSigninSuccess={this.handleSigninSuccess} />
      </section>
    );
  }
}
