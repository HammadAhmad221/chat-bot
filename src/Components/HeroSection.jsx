// HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center gap-20 text-white p-28"
      style={{
        backgroundImage: `url('/Background.svg')`
      }}
    >
      <h1 className="text-8xl md:text-6xl font-bold mb-6 w-[50%]">
        TREE CARE, REVOLUTIONIZED.
      </h1>
      <div className="flex space-x-4">
        <button className="bg-green-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700">
          Get Tree Care Advice Now
        </button>
        <button className="bg-white text-green-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
          Connect with an Arborist
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
