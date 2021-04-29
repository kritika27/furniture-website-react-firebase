import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="err">
      <img
        style={{ height: "60vh", width: "35vw" }}
        src="https://raw.githubusercontent.com/kritika27/ecommerce-store-reactjs-stripe-oauth2/main/public/images/Q2BAOd2.png"
        alt="404 error"
      />
      <h3>This Page Is Not On The Map.</h3>
      <Link to="/">
        <button className="button">Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;