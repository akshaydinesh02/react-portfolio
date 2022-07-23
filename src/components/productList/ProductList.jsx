import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data.js";

import React from "react";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Title</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          nostrum? Culpa illum obcaecati voluptatem totam ipsam quis cumque
          temporibus vitae incidunt debitis provident itaque eaque, dolores cum
          ad ea adipisci!
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
