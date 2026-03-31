import React from "react";
import productsData from "../../../public/data.json"; 
import { toast } from "react-toastify";
import Header from "../../Components/mainHeader/Header";
import ProductList from "./ProductList";
import CartContainer from "../Cart/CartContainer";

const Card = ({ cartItems, setCartItems, selectProduct, setSelectProduct }) => {


  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);


  const handleAddToCart = (product) => {
    const isExist = cartItems.find((item) => item.id === product.id);
    if (!isExist) {
      setCartItems([...cartItems, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.warning("This product is already in your cart");
    }
  };


  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.error("Product removed from cart!");
  };

  const handleCheckout = () => {
    setCartItems([]);
    toast.success("Order Placed Successfully!");
    setSelectProduct("product");
  };

  return (
    <div className="my-20 flex flex-col items-center px-4">

      <Header
        setSelectProduct={setSelectProduct}
        selectProduct={selectProduct}
        cartItems={cartItems}
      />

      <div className="w-full max-w-7xl mt-10">
        {selectProduct === "product" ? (
          <ProductList 
            productsData={productsData} 
            handleAddToCart={handleAddToCart} 
          />
        ) : (
          <CartContainer 
            cartItems={cartItems}
            handleRemove={handleRemove}
            totalPrice={totalPrice}
            handleCheckout={handleCheckout}
            setSelectProduct={setSelectProduct}
          />
        )}
      </div>
    </div>
  );
};

export default Card;