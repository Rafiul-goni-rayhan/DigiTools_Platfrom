import React from "react";
import CartItem from "./CartItem"; 
import CartSummary from "./CartSummary"; 
import EmptyCart from "../CardSection/EmptyCart"; 

const CartContainer = ({ cartItems, handleRemove, totalPrice, handleCheckout, setSelectProduct }) => {
  return (
    <div className="max-w-4xl mx-auto w-full bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
      
      <h3 className="text-2xl font-bold mb-8 text-gray-800">Your Cart</h3>


      {cartItems.length > 0 ? (
        <>
          <div className="space-y-4">
            
            {cartItems.map((item) => (
              <CartItem 
                key={item.id} 
                item={item} 
                handleRemove={handleRemove} 
              />
            ))}
          </div>

          
          <CartSummary totalPrice={totalPrice} handleCheckout={handleCheckout} />
        </>
      ) : (
      
        <EmptyCart setSelectProduct={setSelectProduct} />
      )}
    </div>
  );
};

export default CartContainer;