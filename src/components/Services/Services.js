import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <div>
      <section id="about" className="icons bg-light">
        <div className="flex-items">
          <div>
            <i className="fa fa-university fa-2x"></i>
            <div>
              <h3>Investment Banking</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
          <div>
            <i className="fa fa-book fa-2x"></i>
            <div>
              <h3>Portfolio Manager</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
          <div>
            <i className="fa fa-pencil fa-2x"></i>
            <div>
              <h3>Tax Custodial</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, iusto!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
