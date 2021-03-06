import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <section className="aboutSection">
          <h1>Roomsquared</h1>
          <h2>Keep track of shared household expenses.</h2>
          <p className="aboutBlurb">
            Roomsquared helps you track the amount of money spent and the items
            purchased for you and your roommates.
          </p>
          <div className="button-group">
            <Link to="/demo">Demo</Link>
            <a href="#features">Features</a>
          </div>
        </section>
        <section className="aboutSection" id="features">
          <h3>Form your group</h3>
          <div className="about-img-container">
            <img src="/images/5893.png" alt="handshake"></img>
          </div>
          <p>One person makes a group and everyone else will join.</p>
        </section>
        <section className="aboutSection">
          <h3>Track your spends</h3>
          <div className="about-img-container">
            <img
              src="/images/commerce-and-shopping.png"
              alt="shopping sale"
            ></img>
          </div>
          <p>
            Every time you buy toilet paper or refill the Cribs Fridge, log it.
          </p>
        </section>
        <section className="aboutSection">
          <h3>Square up</h3>
          <div className="about-img-container">
            <img src="/images/business-and-finance.png" alt="payments"></img>
          </div>
          <p>
            At the end of the month, you will be notified how much and to whom
            you need to Venmo to square up the house tab.
          </p>
        </section>
      </div>
    );
  }
}
