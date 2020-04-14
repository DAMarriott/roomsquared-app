import React, { Component } from "react";
import { Link } from "react-router-dom";
import ToggleSignout from "./ToggleSignout";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <h1 className="header-logo">
          Room<sup>2</sup>
        </h1>

        <ToggleSignout />
      </header>
    );
  }
}

export default Header;
