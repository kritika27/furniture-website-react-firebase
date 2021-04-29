import React from "react";
import data from "./data";
import Footer from "./../Footer/Footer";
import "./Product.css";

const ProductList = () => {
  return (
    <>
      <h1 className="product-title center">Products</h1>
      <div className="cocktails-center">
        {data.map((product) => {
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
      <Footer />
    </>
  );
};
export default ProductList;
