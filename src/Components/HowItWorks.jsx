// HowItWorks.js
import React from 'react';

const HowItWorks = () => {
  const steps = [
    { icon: '🌳', title: 'Advice', description: 'Get expert tips on planting, pruning, watering, and maintaining your trees backed by the power of AI.' },
    { icon: '🔍', title: 'Diagnostics', description: 'Upload photos to determine tree species and help identify the presence of pests and diseases.' },
    { icon: '💰', title: 'Pricing', description: 'Receive real-time, transparent service pricing based on your location, demand, and project complexity.' },
    { icon: '🔗', title: 'Connect', description: 'Easily connect with tree care professionals for consultations and services like pruning or removal.' }
  ];

  return (
    <section>
      <div className="py-4 text-center">
        <h2 className="text-green-800 font-semibold text-sm uppercase">Work Process</h2>
        <h3 className="text-6xl font-bold text-[#0B3D2C] mt-2">How It Works</h3>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 py-12">
        {steps.map((step, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-full p-4 mb-4">
              <span className="text-green-700 text-4xl">{step.icon}</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">{step.title}</h4>
            <p className="text-gray-600 text-sm mt-2 max-w-xs">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
