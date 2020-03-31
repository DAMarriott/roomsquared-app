import React, { Component } from "react";
import SignupForm from "../components/SignupForm";
import { GroupFormProvider } from "../contexts/GroupFormContext";

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
      <GroupFormProvider>
        <section className="SignupPage">
          <SignupForm onRegistrationSuccess={this.handleSignupSuccess} />
        </section>
      </GroupFormProvider>
    );
  }
}
