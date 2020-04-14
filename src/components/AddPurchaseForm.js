import React, { Component } from "react";
import PurchaseContext from "../contexts/PurchaseContext";
import PurchaseApiService from "../services/purchase-api-service";
/* eslint-disable */

export default class AddPurchaseForm extends Component {
  static contextType = PurchaseContext;

  state = { item: "", price: null };

  constructor(props) {
    super(props);
    this.state = {
      purchases: props.purchases || [],
      item: props.item || "",
      price: props.price || null,
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username, groupId } = this.context;
    const { onAddition } = this.props;
    const { cost, item } = e.target;

    const purchase = { item: item.value, price: cost.value };

    PurchaseApiService.postPurchase(purchase)
      .then(this.context.addPurchase)
      .then(() => {
        cost.value == "", item.value == "";
      })
      .catch(this.context.setError);

    let newPurchase = {
      item: item.value,
      cost: parseFloat(cost.value),
    };

    this.setState((prevState) => {
      const purchases = prevState.purchases.concat(newPurchase);
      if (onAddition && typeof onAddition === "function") {
        onAddition(newPurchase, purchases);
      }
      return {
        purchases,
      };
    });
  }

  render() {
    return (
      <div className="addpurchase">
        <h2>Add Purchase</h2>
        <form
          className="addpurchase__form"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <label htmlFor="item">Item:</label>
          <input
            type="text"
            name="item"
            id="item"
            placeholder="Papertowels, Seltzer, Shareables..."
          />
          <label htmlFor="cost">Cost:</label>
          <input
            type="text"
            name="cost"
            id="cost"
            placeholder="$"
            value={this.state.cost}
          />

          <div className="addpurchase__button">
            <button type="submit">ADD</button>
          </div>
        </form>
      </div>
    );
  }
}
