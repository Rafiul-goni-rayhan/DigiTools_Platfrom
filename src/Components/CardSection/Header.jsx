import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ cartItems = [], setSelectProduct, selectProduct }) => {
  return (
    <nav className="navbar bg-base-100 shadow-sm flex justify-around items-center fixed top-0 left-0 w-full z-50 px-4 md:px-10">
      <div className="navbar-start">
     
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box `z-1` mt-3 w-52 p-2 shadow"
          >
            <li onClick={() => setSelectProduct("product")}><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        {/* Logo */}
        <a 
          onClick={() => setSelectProduct("product")}
          className="btn btn-ghost text-3xl font-bold bg-linear-to-r from-purple-900 to-purple-500 bg-clip-text text-transparent cursor-pointer"
        >
          DigiTools
        </a>
      </div>

  
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li onClick={() => setSelectProduct("product")}>
            <a className={`font-bold transition-all ${selectProduct === "product" ? "text-purple-600 border-b-2 border-purple-600 rounded-none" : "text-gray-600"}`}>
              Products
            </a>
          </li>
          <li><a className="text-gray-600 hover:text-purple-600">Features</a></li>
          <li><a className="text-gray-600 hover:text-purple-600">Pricing</a></li>
          <li><a className="text-gray-600 hover:text-purple-600">Testimonials</a></li>
          <li><a className="text-gray-600 hover:text-purple-600">FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-5 flex items-center">
        
        <div 
          className="relative cursor-pointer p-2 group"
          onClick={() => setSelectProduct("cart")}
        >
          <FaShoppingCart 
            className={`text-2xl transition-all ${selectProduct === "cart" ? "text-purple-600" : "text-gray-700 group-hover:text-purple-600"}`} 
          />
          
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-pulse">
              {cartItems.length}
            </span>
          )}
        </div>

        <h2 className="cursor-pointer font-medium text-gray-700 hover:text-purple-600 transition-colors hidden sm:block">Login</h2>
        
        <a className="text-lg btn border-none rounded-3xl font-bold bg-linear-to-r from-purple-900 to-purple-500 text-white hover:opacity-90 shadow-md">
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Header;