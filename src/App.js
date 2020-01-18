import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./routes/AboutPage";
import SigninPage from "./routes/SigninPage";
import SignupPage from "./routes/SignupPage";
import PurchasesPage from "./routes/PurchasesPage";
import NotFoundPage from "./routes/NotFoundPage";
import "./App.css";

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="App__main">
          <Switch>
            <Route exact path="/" component={AboutPage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/home" component={PurchasesPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
