import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav id="nav">
        <div className="container">
          <h1 className="logo">
            <i className="fa fa-cutlery"></i> Wooden Arts
          </h1>

          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
