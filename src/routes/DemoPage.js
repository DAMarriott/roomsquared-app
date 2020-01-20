import React, { Component } from "react";

import AddPurchaseDemoForm from "../components/AddPurchaseDemoForm";

export default class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
    this.handleOnAddition = this.handleOnAddition.bind(this);
  }

  handleOnAddition(newPurchase, purchases) {
    console.log(purchases);

    this.setState({
      total: purchases.reduce((a, b) => a + b.cost, 0)
    });
  }

  render() {
    const { total } = this.state;
    return (
      <div className="main-home">
        <section className="group-section">
          <div className="group-counter">
            <div className="you-counter">You: ${total}</div>
            <div className="user-counter">User 2: $75</div>
            <div className="user-counter">User 3: $120</div>
          </div>

          <h2>You</h2>
          <AddPurchaseDemoForm onAddition={this.handleOnAddition} />
        </section>
        <section className="group-section">
          <h2>User 2</h2>
          <div className="purchase-box">
            <ul>
              <li className="purchase-item">Papertowels</li>
              <li className="purchase-cost">$15</li>
            </ul>
            <ul>
              <li className="purchase-item">Diet Cokes</li>
              <li className="purchase-cost">$10</li>
            </ul>
            <ul>
              <li className="purchase-item">Shareables</li>
              <li className="purchase-cost">$50</li>
            </ul>
          </div>
        </section>
        <section className="group-section">
          <h2>User 3</h2>
          <div className="purchase-box">
            <ul>
              <li className="purchase-item">Toilet Paper</li>
              <li className="purchase-cost">$15</li>
            </ul>
            <ul>
              <li className="purchase-item">Printer Ink</li>
              <li className="purchase-cost">$30</li>
            </ul>
            <ul>
              <li className="purchase-item">Spectrum bill</li>
              <li className="purchase-cost">$75</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
