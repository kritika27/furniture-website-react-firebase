import React from "react";
import Footer from "./../Footer/Footer";
import "../temp.css";

const About = () => {
  return (
    <div>
      <div className="product-center">
        <img
          //className="prod-photo"
          //src="../../../public/images/undraw_chilling_8tii.svg"
          src="./../images/undraw_team_work_k80m.svg"
          //src="../../public/images/kam-idris-nylcMEgK8EQ-unsplash.jpg"
          alt=""
        />
        <section className="content-prod">
          <h2> About Us</h2>

          <p className="description">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus,
            voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur
            tempora cumque. Ut quo enim vero odio minus nostrum eveniet,
          </p>
          <button>Order Now</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;

/*import React from "react";
//import styled from "styled-components";
//import { PageHero } from "../components";
//import aboutImg from "../assets/hero-bcg.jpeg";
import Footer from "./../Footer/Footer";

const About = () => {
  return (
    <main>
      <div className="page section section-center">
        <img
          src="../../images/kam-idris-nylcMEgK8EQ-unsplash.jpg"
          alt="nice desk"
        />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus,
            voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur
            tempora cumque. Ut quo enim vero odio minus nostrum eveniet,
            doloribus veritatis dolorem unde ipsum, voluptatibus totam.
            Explicabo, quas libero! Laborum incidunt minima consequatur ratione?
          </p>
        </article>
      </div>
     
      <Footer />
    </main>
  );
};
export default About;*/
