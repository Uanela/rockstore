import React from "react";
import Product from "./Product";

export default function ProductsList({ products, addProductToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          addProductToCart={addProductToCart}
        />
      ))}
    </div>
  );
}
