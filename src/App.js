import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, Error, Home, ProductList } from "./pages/index.js";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/products" component={ProductList}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="*" component={Error}></Route>
        </Switch>
      </Router>
    </>
  );
}
