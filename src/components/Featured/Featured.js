import React from "react";
import data from "../../data";
import "../../pages/Products/Product.css";

const Featured = () => {
  return (
    <>
      <h1 className="product-title center">Featured</h1>
      <div className="cocktails-center">
        {data
          .filter((item) => item.featured === true)
          .map((product) => {
            const { id, image, name, price } = product;
            return (
              <article key={id} className="cocktail">
                <div className="img-container">
                  <img src={image} alt={name} />
                </div>
                <div className="cocktail-footer">
                  <div className="product">
                    <h4>{name}</h4>
                    <h4 className="price">${price}</h4>
                  </div>
                </div>
              </article>
            );
          })}
      </div>
    </>
  );
};
export default Featured;
