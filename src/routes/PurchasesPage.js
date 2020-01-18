import React, { Component } from "react";
import PurchaseContext from "../contexts/PurchaseContext";
import PurchaseApiService from "../services/purchase-api-service";
import PurchaseListItem from "../components/PurchaseListItem";
import { getAuthToken } from "../services/token-service";

export default class PurchasesPage extends Component {
  static contextType = PurchaseContext;
  componentDidMount() {
    if (!getAuthToken()) {
      this.props.history.push("/signin");
    }
    this.context.clearError();
    PurchaseApiService.getPurchases()
      .then(this.context.setPurchase)
      .catch(this.context.setError);
  }

  renderPurchases() {
    const { purchaseList = [] } = this.context;
    return purchaseList.map(purchase => (
      <PurchaseListItem key={purchase.id} purchase={purchase} />
    ));
  }

  render() {
    return (
      <div className="main-home">
        <section className="group-section">
          <h2>You</h2>
          <div className="purchase-box">Your purchases</div>
          {this.renderPurchases()}
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
