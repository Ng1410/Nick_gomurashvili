import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Women from "./components/Women/Women";
import Men from "./components/Men/Men";
import Kids from "./components/Kids/Kids";
import Bag from "./components/Bag/Bag";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Women} />
            <Route path="/men" component={Men} />
            <Route path="/kids" component={Kids} />
            <Route path="/bag" component={Bag} />
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
