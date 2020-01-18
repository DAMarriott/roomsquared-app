import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PurchaseListItem extends Component {
  render() {
    const { purchase } = this.props;
    return (
      <Link to={`/purchase/${purchase.id}`} className="PurchaseListItem">
        <header className="PurchaseListItem__header">
          <h2 className="PurchaseListItem__heading">{purchase.item}</h2>
          <PurchaseDate purchase={purchase} />
        </header>
      </Link>
    );
  }
}

function PurchaseStyle({ purchase }) {
  return <span className="PurchaseListItem__style"></span>;
}

function PurchaseDate({ purchase }) {
  return <span className="PurchaseListItem__date"></span>;
}

function PurchaseAuthor({ purchase }) {
  return <span className="PurchaseListItem__author"></span>;
}

function PurchaseCommentCount({ purchase }) {
  return (
    <span className="PurchaseListItem__comment-count fa-layers fa-fw">
      <span className="fa-layers-text fa-inverse"></span>
    </span>
  );
}
