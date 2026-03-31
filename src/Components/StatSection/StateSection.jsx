import React from "react";

const StateSection = () => {
  return (
    
    <div className="max-w-7xl mx-auto w-full px-4 md:px-10 flex justify-around items-center bg-linear-to-r from-purple-900 to-purple-500 text-white my-7 p-10 ">
      
      
      <div className="text-center">
        <h1 className="text-4xl font-bold">50K</h1>
        <p className="opacity-80 text-sm md:text-base">Active Users</p>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold">200+</h1>
        <p className="opacity-80 text-sm md:text-base">Premium Tools</p>
      </div>

    
      <div className="text-center">
        <h1 className="text-4xl font-bold">4.9</h1>
        <p className="opacity-80 text-sm md:text-base">User Rating</p>
      </div>

    </div>
  );
};

export default StateSection;