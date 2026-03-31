import React from "react";

const Header = ({ setSelectProduct, selectProduct, cartItems }) => {
  return (
    <div className="text-center mb-10">
      
      <h2 className="text-4xl font-bold text-white">
        Premium Digital Tools
      </h2>
      
      <p className="mt-2 text-gray-500 max-w-xl mx-auto">
        Choose from our curated collection of premium digital products
        designed to boost your productivity and creativity.
      </p>

      <div className="flex gap-4 justify-center mt-8 bg-gray-50 p-1 rounded-full w-fit mx-auto border border-gray-100">
        
        <button
          onClick={() => setSelectProduct("product")}
          

          className={`px-10 py-3 transition-all rounded-full font-semibold ${
            selectProduct === "product"
              ? "bg-purple-700 text-white shadow-md"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setSelectProduct("cart")}
          
          className={`px-10 py-3 transition-all rounded-full font-semibold ${
            selectProduct === "cart"
              ? "bg-purple-700 text-white shadow-md"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          Cart ({cartItems.length})
        </button>
      </div>
    </div>
  );
};

export default Header;