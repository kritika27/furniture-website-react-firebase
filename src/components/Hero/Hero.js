import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="header-container">
      <div className="wrapper">
        <header className="hero">
          <div className="hero-content">
            <h1>Hi, I’m Darlene</h1>
            <p>
              I design beautiful websites and mobile apps that modern trends
              demand
            </p>
            <button>Get Started</button>
          </div>

          <div className="hero-image">
            <img src="../../images/kam-idris-nylcMEgK8EQ-unsplash.jpg" alt="" />
            <div className="photo-bg"></div>
          </div>
        </header>
      </div>
    </div>
  );
}
