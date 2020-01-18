import React, { Component } from "react";
import PurchaseContext from "../../contexts/PurchaseContext";
import PurchaseApiService from "../../services/purchase-api-service";

export default class AddPurchaseForm extends Component {
  static contextType = PurchaseContext;

  handleSubmit(e) {
    e.preventDefault();

    const { username } = this.context;
    const { cost, item } = ev.target;

    PurchaseApiService.postPurchase(username, cost.value, item.value)
      .then(this.context.addPurchase)
      .then(() => {
        (cost.value = ""), (item.value = "").catch(this.context.setError);
      });
  }

  render() {
    return (
      <div className="addpurchase">
        <h2>Add Purchase</h2>
        <form
          className="addpurchase__form"
          onSubmit={e => this.handleSubmit(e)}
        >
          <label htmlFor="item">Item:</label>
          <input
            type="text"
            name="item"
            id="item"
            placeholder="Papertowels, Seltzer, Shareables..."
            value={this.state.name}
            onChange={e => this.titleChanged(e.target.value)}
          />
          <label htmlFor="cost">Cost:</label>
          <input
            type="text"
            name="cost"
            id="cost"
            placeholder="$"
            value={this.state.cost}
            onChange={e => this.urlChanged(e.target.value)}
          />

          <div className="addpurchase__button">
            <button type="submit">ADD</button>
          </div>
        </form>
      </div>
    );
  }
}
