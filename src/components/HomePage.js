import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchases: []
    };
  }

  render() {
    return (
      <main className="main-home">
        <section className="group-section">
          <h2>You</h2>
          <div className="purchase-box">Your purchases</div>
          <form className="add-new-form">
            <div>
              <label htmlFor="item">Item</label>
              <input
                placeholder="Paper towels, toilet paper, etc..."
                type="text"
                className="item"
                id="item"
              />
            </div>
            <div>
              <label htmlFor="cost">Cost</label>
              <input type="text" className="cost" id="cost" />
            </div>
            <button type="submit">ADD</button>
          </form>
        </section>
        <section className="group-section">
          <h2>User 2</h2>
          <div className="purchase-box">User 2 purchases</div>
        </section>
        <section className="group-section">
          <h2>User 3</h2>
          <div className="purchase-box">User 3 purchases</div>
        </section>
      </main>
    );
  }
}

export default HomePage;
