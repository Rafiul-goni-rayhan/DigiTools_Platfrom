import React from "react";
import { CiPlay1 } from "react-icons/ci"; 
import dotImg from '../../assets/products/Group 5.png'; 
import bannerImg from '../../assets/products/banner.png'; 

const Banner = () => {
  return (

    <div className="m-9 flex flex-col md:flex-row justify-center gap-10">

      <div className="flex flex-col justify-center">
        
       
        <button className="btn btn-primary w-70 border-none rounded-3xl font-bold bg-purple-200 text-purple-800">
       
          <img src={dotImg} alt="" /> New: AI-Powered Tools Available
        </button>

    
        <h2 className="text-4xl font-bold my-2">
          Supercharge Your <br /> Digital Workflow
        </h2>

        <h4 className="text-gray-600 mb-4">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today.
          <br />
          Explore Products
        </h4>

        <div className="flex gap-5">
          <button className="btn btn-primary bg-linear-to-r from-purple-900 to-purple-500 rounded-4xl text-white">
            Explore Products
          </button>

          <button className="btn btn-outline rounded-4xl text-purple-700">
            <CiPlay1 />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="">
        <img src={bannerImg} alt="banner img" className="w-full max-w-md h-auto" />
      </div>

    </div>
  );
};

export default Banner;