import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-linear-to-r from-purple-900 to-purple-500 py-20 px-6 flex flex-col items-center text-center text-white font-sans">
     
      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
        Ready To Transform Your Workflow?
      </h2>

    
      <p className="max-w-2xl text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
        Join thousands of professionals who are already using Digitools to work smarter. 
        Start your free trial today.
      </p>

      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button className="bg-white text-[#8B2CF5] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
          Explore Products
        </button>
        <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#8B2CF5] transition-all">
          View Pricing
        </button>
      </div>

      
      <div className="text-sm md:text-base opacity-80 flex flex-wrap justify-center gap-2">
        <span>14-day free trial</span>
        <span className="hidden sm:inline">•</span>
        <span>No credit card required</span>
        <span className="hidden sm:inline">•</span>
        <span>Cancel anytime</span>
      </div>
    </section>
  );
};

export default CallToAction;