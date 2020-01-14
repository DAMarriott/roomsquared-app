import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import AboutPage from "./components/AboutPage.js";
import SigninForm from "./components/SigninForm.js";
import SignupForm from "./components/SignupForm.js";
import HomePage from "./components/HomePage.js";
import NotFoundPage from "./components/NotFoundPage.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route path="/signin" component={SigninForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/home" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
