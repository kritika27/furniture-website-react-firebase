import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  // Get current year
  var year = new Date().getFullYear();
  return (
    <footer className="footer bg-dark">
      <div className="social">
        <Router>
          <Link to="/">
            <i className="fa fa-facebook fa-2x"></i>
          </Link>

          <Link to="/">
            <i className="fa fa-linkedin fa-2x"></i>
          </Link>
          <Link to="/">
            <i className="fa fa-twitter fa-2x"></i>
          </Link>
          <Link to="/">
            <i className="fa fa-youtube fa-2x"></i>
          </Link>
        </Router>
      </div>
      <p>copyright &copy; {year}</p>
    </footer>
  );
}
