import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <h1 className="header-logo">
          Room<sup>2</sup>
        </h1>

        <nav id="nav" className="nav">
          <Link className="smoothscroll" to="/">
            About
          </Link>
          <Link className="smoothscroll" to="/home">
            Home
          </Link>
          <Link className="smoothscroll" to="/signin">
            Sign In
          </Link>
          <Link className="smoothscroll" to="/signup">
            Sign Up
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
