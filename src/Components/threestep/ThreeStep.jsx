import React from 'react';
import { User, Box, Rocket } from 'lucide-react'; 
const GetStarted = () => {
  const steps = [
    {
      id: '01',
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
      icon: <User className="w-8 h-8 text-[#7C3AED]" />,
    },
    {
      id: '02',
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      icon: <Box className="w-8 h-8 text-[#7C3AED]" />,
    },
    {
      id: '03',
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      icon: <Rocket className="w-8 h-8 text-[#7C3AED]" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 text-lg mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
            >
              {/* Step Number Badge */}
              <div className="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-bold px-2 py-1 rounded-lg">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className="w-20 h-20 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6">
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;