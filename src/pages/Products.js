import React from "react";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h2>Product Page</h2>
      <ul>
        <li>
          <Link to="products/p1">Books</Link>
        </li>
        <li>
          <Link to="products/p2">Grosary</Link>
        </li>
        <li>
          <Link to="products/p3">Vegitables</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
