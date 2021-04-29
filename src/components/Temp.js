import React from "react";

import "./temp.css";

const Temp = () => {
  return (
    <div>
      <div className="product-center">
        <img
          //className="prod-photo"
          src="./../images/undraw_chilling_8tii.svg"
          //src="./../images/undraw_home_cinema_l7yl.svg"
          //src="../../public/images/kam-idris-nylcMEgK8EQ-unsplash.jpg"
          alt=""
        />
        <section className="content-prod">
          <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

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
    </div>
  );
};

export default Temp;
