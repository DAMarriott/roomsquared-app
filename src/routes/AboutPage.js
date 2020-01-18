import React, { Component } from "react";

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <section className="aboutSection">
          <h1>Roomsquared</h1>
          <h2>Keep track of shared household expenses.</h2>
          <p>
            Roomsquared helps you track the amount of money spent and the items
            purchased for you and your roommates.
          </p>
          <div className="button-group">
            <a href="#features">Demo</a>
            <a href="#features">Features</a>
          </div>
        </section>
        <section className="aboutSection" id="features">
          <h3>Make your group</h3>
          <div className="about-img-container">
            <img src="/images/5893.png" alt="handshake"></img>
          </div>
          <p>One person makes a group and everyone else will join.</p>
        </section>
        <section className="aboutSection">
          <h3>Track your spends</h3>

          <p>
            Every time you buy toilet paper or refill the Cribs Fridge, log it.
          </p>
        </section>
        <section className="aboutSection">
          <h3>Square up</h3>

          <p>
            At the end of the month, you will be notified how much and to whom
            you need to Venmo to square up the house tab.
          </p>
        </section>
      </div>
    );
  }
}
