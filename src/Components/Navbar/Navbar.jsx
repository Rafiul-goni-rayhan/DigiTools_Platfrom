import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartItems = [], setSelectProduct }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50 w-full justify-center">
      
      
      <div className="max-w-7xl w-full px-4 md:px-10 flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost p-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box `z-1` mt-3 w-52 p-2 shadow">
              <li onClick={() => setSelectProduct("product")}><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
            </ul>
          </div>
          <a
            onClick={() => setSelectProduct("product")}
            className="text-3xl font-bold bg-linear-to-r from-purple-900 to-purple-500 bg-clip-text text-transparent cursor-pointer"
          >
            DigiTools
          </a>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium text-gray-600">
            <li onClick={() => setSelectProduct("product")}><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-5">
          <div className="relative cursor-pointer p-2" onClick={() => setSelectProduct("cart")}>
            <FaShoppingCart className="text-2xl text-gray-700 hover:text-purple-600 transition-all" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartItems.length}
              </span>
            )}
          </div>
          <h2 className="cursor-pointer font-medium hover:text-purple-600 hidden sm:block">Login</h2>
          <a className="btn border-none rounded-3xl font-bold bg-linear-to-r from-purple-900 to-purple-500 text-white px-6">
            Get Started
          </a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;