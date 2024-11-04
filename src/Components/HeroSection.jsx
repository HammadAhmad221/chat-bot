// HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center gap-20 text-white lg:p-28 p-2"
      style={{
        backgroundImage: `url('/Background.svg')`
      }}
    >
      <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-3xl font-bold mb-6 sm:w-[80%] lg:w-[50%]">
        TREE CARE, REVOLUTIONIZED.
      </h1>
      <div className="flex gap-4 flex-wrap">
        <button className="bg-green-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700">
          Get Tree Care Advice Now
        </button>
        <button className="bg-white text-[#0B3D2C] px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
          Connect with an Arborist
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
