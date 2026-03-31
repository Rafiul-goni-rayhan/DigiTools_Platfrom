import React from 'react';
import { FaTrashAlt } from "react-icons/fa"; 


const CartItem = ({ item, handleRemove }) => {
  return (
    
    <div className="flex items-center justify-between bg-white p-5 mb-4 rounded-3xl shadow-sm border border-gray-50 hover:border-purple-200 transition-all">
      
     
      <div className="flex items-center gap-5">
        
        
        <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-xl text-purple-700 font-black">
          {item.name[0]} 
        </div>
        
       
        <div>
          <h3 className="font-bold text-gray-800 text-lg leading-tight">{item.name}</h3>
          <p className="text-gray-400 text-sm">
            
            ${item.price} <span className="mx-1">•</span> {item.period}
          </p>
        </div>
      </div>

     
      <div className="flex items-center gap-6">
        
        <button 
          onClick={() => handleRemove(item.id)}
          className="btn  btn-ghost text-red-400 hover:bg-red-50 hover:text-red-600 transition-all"
        > remove
          <FaTrashAlt size={18} />
        </button>
      </div>

    </div>
  );
};

export default CartItem;