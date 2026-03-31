import React from 'react';
import * as Icons from "react-icons/fa";

const CardItem = ({ product, handleAddToCart }) => {
  const IconComponent = Icons[product.icon] || Icons.FaBox;

  return (
    <div className="card bg-white shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <div className="p-3 bg-purple-50 text-purple-700 rounded-2xl text-2xl">
            <IconComponent />
          </div>
          <span className="badge badge-ghost capitalize font-medium py-3 px-4 text-xs">
            {product.tag}
          </span>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-500 text-sm mt-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="my-5">
          <span className="text-3xl font-extrabold text-gray-900">${product.price}</span>
          <span className="text-gray-400 text-sm font-medium"> / {product.period}</span>
        </div>

        <ul className="space-y-3 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <Icons.FaCheckCircle className="text-green-500" /> {feature}
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={() => handleAddToCart(product)}
        className="btn btn-primary bg-linear-to-r from-purple-900 to-purple-500 hover:bg-purple-800 text-white w-full border-none rounded-2xl py-4 font-bold shadow-lg shadow-purple-100"
      >
        Buy Now  
      </button>
    </div>
  );
};

export default CardItem;