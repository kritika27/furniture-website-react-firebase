import React from "react";
import { Link } from "react-router-dom";
import data from "./data";
import "./Product.css";
const ProductList = () => {
  return (
    <>
      {/*} <PageHero item={products.length} name="PRODUCTS" />*/}
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

                <Link to={`/products/${id}`} className="prod-details">
                  <button>View</button>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};
export default ProductList;
