import React, { Component } from "react";
import SignupForm from "../components/SignupForm";

export default class SignupPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleSignupSuccess = user => {
    const { history } = this.props;
    history.push("/signin");
  };

  render() {
    return (
      <section className="SignupPage">
        <SignupForm onRegistrationSuccess={this.handleSignupSuccess} />
      </section>
    );
  }
}
