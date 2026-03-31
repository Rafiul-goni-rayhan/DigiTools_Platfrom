import React from "react";


const CartSummary = ({ totalPrice, handleCheckout }) => (
 
  <div className="mt-10 pt-8 border-t border-gray-100">
    
   
    <div className="flex justify-between items-center mb-8">
      <span className="text-gray-400 text-lg font-medium">Total:</span>
      
      
      <span className="text-3xl font-extrabold text-gray-900">
        ${totalPrice.toFixed(2)}
      </span>
    </div>

    
    <button
      onClick={handleCheckout} 
      className="w-full bg-linear-to-r from-purple-900 to-purple-500 hover:bg-purple-700 text-white py-5 rounded-2xl font-bold text-xl transition-all shadow-lg active:scale-95"
    >
      Proceed To Checkout
    </button>
  </div>
);

export default CartSummary;