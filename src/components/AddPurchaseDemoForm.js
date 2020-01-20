import React, { Component } from "react";
import PurchaseItems from "./PurchaseItemsDemo";

export default class AddPurchaseDemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchases: props.purchases || []
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const { onAddition } = this.props;

    let newPurchase = {
      item: this._inputItem.value,
      cost: parseFloat(this._inputCost.value),
      key: Date.now()
    };
    console.log(newPurchase);

    this.setState(prevState => {
      const purchases = prevState.purchases.concat(newPurchase);
      if (onAddition && typeof onAddition === "function") {
        onAddition(newPurchase, purchases);
      }
      return {
        purchases
      };
    });
  }

  render() {
    return (
      <div className="addpurchase">
        <PurchaseItems entries={this.state.purchases} />
        <form
          className="addpurchase__form"
          onSubmit={e => this.handleSubmit(e)}
        >
          <label htmlFor="item">Item:</label>
          <input
            type="text"
            name="item"
            id="item"
            ref={a => (this._inputItem = a)}
            placeholder="Papertowels, Seltzer, Shareables..."
          />
          <label htmlFor="cost">Cost:</label>
          <input
            type="text"
            name="cost"
            id="cost"
            ref={a => (this._inputCost = a)}
            placeholder="$"
          />

          <div className="addpurchase__button">
            <button type="submit">ADD</button>
          </div>
        </form>
      </div>
    );
  }
}
