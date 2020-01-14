import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap" className="navbar">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <div className="logo-container">
            <p className="header-logo">
              Room<sup>2</sup>
            </p>
          </div>

          <ul id="nav" className="nav">
            <li className="current">
              <Link className="smoothscroll" to="/">
                About
              </Link>
            </li>
            <li>
              <Link className="smoothscroll" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="smoothscroll" to="/signin">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="smoothscroll" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
