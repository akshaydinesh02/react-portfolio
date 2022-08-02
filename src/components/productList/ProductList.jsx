import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data.js";

import React from "react";

const ProductList = () => {
  return (
    <div id="pl" className="pl">
      <div className="pl-texts">
        <h1 className="primary-heading">My Work</h1>
        <p className="pl-desc">
          These are some of the websites and web-apps I have developed!
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
