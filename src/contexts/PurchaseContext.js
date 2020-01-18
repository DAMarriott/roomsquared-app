import React, { Component } from "react";

const PurchaseContext = React.createContext({
  purchase: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPurchase: () => {},
  clearPurchase: () => {},
  addPurchase: () => {}
});

export default PurchaseContext;

export class PurchaseProvider extends Component {
  state = {
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setPurchase = purchase => {
    this.setState({ purchase });
  };

  clearPurchase = () => {
    this.setPurchase([]);
  };

  addPurchase = purchase => {
    this.setPurchase([...this.state.purchase, purchase]);
  };

  render() {
    const value = {
      Purchase: this.state.purchase,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPurchase: this.setPurchase,
      addPurchase: this.addPurchase
    };
    return (
      <PurchaseContext.Provider value={value}>
        {this.props.children}
      </PurchaseContext.Provider>
    );
  }
}
