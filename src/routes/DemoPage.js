import React, { Component } from "react";

import AddPurchaseDemoForm from "../components/AddPurchaseDemoForm"

export default class DemoPage extends Component {

  render() {
    return (
      <div className="main-home">
        <section className="group-section">
          <h2>You</h2>
          <div className="purchase-box">Your purchases</div>
          <AddPurchaseDemoForm />
        </section>
        <section className="group-section">
          <h2>User 2</h2>
          <div className="purchase-box">User 2 purchases</div>
        </section>
        <section className="group-section">
          <h2>User 3</h2>
          <div className="purchase-box">User 3 purchases</div>
        </section>
      </div>
    );
  }
}
