import React, { Component } from "react";

class AddPurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: ""
    };
  }

  nameChanged(name) {
    this.setState({
      name
    });
  }

  priceChanged(url) {
    this.setState({
      price
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const purchase = (({ name, price }) => ({ name, price }))(this.state);
    const url = "";
    const options = {
      method: "POST",
      body: JSON.stringify(purchase),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer $2a$10$ZhdeJefcb.5sx/DCmO/n8u5sJLcARAdbHw9tfm1mevGRq3s1.5DpW"
      }
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          name: "",
          price: ""
        });
        this.props.handleAdd(purchase);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    const error = this.state.error ? (
      <div className="error">{this.state.error}</div>
    ) : (
      ""
    );

    return (
      <div className="addpurchase">
        <h2>Add Purchase</h2>
        {error}
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
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="$"
            value={this.state.price}
            onChange={e => this.urlChanged(e.target.value)}
          />

          <div className="addpurchase__button">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
