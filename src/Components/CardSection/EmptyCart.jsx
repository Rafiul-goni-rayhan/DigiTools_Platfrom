import React from "react";

const EmptyCart = ({ setSelectProduct }) => (
  <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-3xl">
    <p className="text-gray-400 text-xl font-medium">Your cart is currently empty!</p>
    <button
      onClick={() => setSelectProduct("product")}
      className="text-purple-700 mt-4 text-lg font-semibold hover:underline"
    >
      Go back to products
    </button>
  </div>
);

export default EmptyCart;