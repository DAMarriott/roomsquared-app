import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAuthToken, clearAuthToken } from "../services/token-service";
import AuthApiService from "../services/auth";

export default class ToggleSignout extends React.Component {
  render() {
    const renderToggleSignout = () => {
      if (getAuthToken()) {
        return (
          <nav id="nav" className="nav">
            <Link className="smoothscroll" to="/">
              About
            </Link>
            <Link className="smoothscroll" to="/home">
              Home
            </Link>
            <Link
              className="smoothscroll"
              to="/signin"
              onClick={clearAuthToken}
            >
              Sign Out
            </Link>
          </nav>
        );
      } else {
        return (
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
              Register
            </Link>
          </nav>
        );
      }
    };

    return <div>{renderToggleSignout()}</div>;
  }
}
