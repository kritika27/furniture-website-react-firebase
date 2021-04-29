import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="product-center">
        <img src="./../images/undraw_chilling_8tii.svg" alt="" />
        <section className="content-prod">
          <h1> Design Your Comfort Zone.</h1>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus,
            voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur
            tempora cumque. Ut quo enim vero odio minus nostrum eveniet,
          </p>

          <Link to="/products">
            <button className="btn">Order Now</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Hero;
