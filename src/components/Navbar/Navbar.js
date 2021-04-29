import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { useHistory } from "react-router-dom";
import Auth from "../../utils/Auth";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");

  const googleSignIn = async () => {
    try {
      await Auth();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    auth().onAuthStateChanged(function (user) {
      if (user) {
        setFirstName(user.displayName);
        console.log(firstName);
        history.push("/products");
      } else console.log("no user");
    });
  }, [history, firstName]);

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
            <li>
              {firstName ? (
                <button>
                  <Link
                    to="/"
                    onClick={() => {
                      auth().signOut();
                      setFirstName("");
                    }}
                  >
                    Sign Out
                  </Link>
                </button>
              ) : (
                <button onClick={googleSignIn}>Sign Up</button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
