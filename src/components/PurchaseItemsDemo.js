import React from "react";

export default class PurchaseItems extends React.Component {
  createPurchase(item) {
    return (
      <ul key={item.key + 2}>
        <li className="purchase-item" key={item.key}>
          {item.item}
        </li>
        <li className="purchase-cost" key={item.key + 1}>
          ${item.cost}
        </li>
      </ul>
    );
  }

  render() {
    var entries = this.props.entries;
    var listItems = entries.map(this.createPurchase);

    return <div className="purchase-box">{listItems}</div>;
  }
}
