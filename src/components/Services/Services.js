import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <>
      <h1 className="product-title center">Services</h1>
      <section id="about" className="icons bg-light">
        <div className="flex-items">
          <div>
            <i className="fa fa-truck fa-2x"></i>
            <div>
              <h3>Fast Delivery</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
          <div>
            <i className="fa fa-check fa-2x"></i>
            <div>
              <h3>Tested Quality Products</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
          <div>
            <i className="fa fa-wrench fa-2x"></i>
            <div>
              <h3>Repair Services</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
