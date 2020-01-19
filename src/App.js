import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./routes/AboutPage";
import SigninPage from "./routes/SigninPage";
import SignupPage from "./routes/SignupPage";
import PurchasesPage from "./routes/PurchasesPage";
import NotFoundPage from "./routes/NotFoundPage";
import "./App.css";
import "./layout.scss";

class App extends Component {
  state = { hasError: false, sticky: false };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      var winTop = window.scrollY;
      if (winTop >= 30) {
        this.setState({ sticky: true });
      } else {
        this.setState({ sticky: false });
      }
    });
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { sticky } = this.state;
    return (
      <div className={["App", sticky ? "sticky-header" : ""].join(" ")}>
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
