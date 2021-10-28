import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const params = useParams();

  const pId = params.productID;
  let product = "";

  if (pId === "p1") {
    product = "Books";
  }

  if (pId === "p2") {
    product = "Grocery";
  }
  if (pId === "p3") {
    product = "Vegetables";
  }

  return (
    <section>
      <h1>Product Details</h1>

      <span>{product}</span>
    </section>
  );
};

export default ProductDetail;
