import React from "react";

export default function Form() {
  return (
    <div>
      <section id="contact" className="contact flex-columns">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img
                src="https://raw.githubusercontent.com/kritika27/portfolio/main/img/thought-catalog-505eectW54k-unsplash.jpg"
                alt="blog"
              />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-light">
              <h2>Blog Posts</h2>
              <form action="" class="callback-form">
                <div className="form-control">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam quaerat, modi doloremque necessitatibus eum dolor
                    nesciunt delectus, voluptate blanditiis, obcaecati beatae ab
                    aut ipsa consequuntur
                  </p>
                </div>

                <button>Read More</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
