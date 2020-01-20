import React, { Component } from "react";

export default class AddPurchaseDemoForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="addpurchase">
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
          />
          <label htmlFor="cost">Cost:</label>
          <input
            type="text"
            name="cost"
            id="cost"
            placeholder="$"
          />

          <div className="addpurchase__button">
            <button type="submit">ADD</button>
          </div>
        </form>
      </div>
    );
};
}
