import React, { Component } from "react";
import SignupForm from "../components/SignupForm";
import { GroupFormProvider } from "../contexts/GroupFormContext";

export default class SignupPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleSignupSuccess = () => {
    this.props.history.push("/signin");
  };

  render() {
    return (
      <GroupFormProvider>
        <section className="SignupPage">
          <SignupForm onRegistrationSuccess={this.handleSignupSuccess} />
        </section>
      </GroupFormProvider>
    );
  }
}
