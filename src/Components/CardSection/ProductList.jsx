import React from "react";
import CardItem from "./CardItem";

const ProductList = ({ productsData, handleAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
      {productsData.map((product) => (
        <CardItem
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;