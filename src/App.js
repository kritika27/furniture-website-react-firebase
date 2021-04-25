import React from "react";
//import About from "./components/About/About";
//import Furniture from "./components/Furniture";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/Products/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/products" component={ProductList}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </Router>
    </>
  );
}
