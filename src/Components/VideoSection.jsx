import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-12 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 p-4">
        <img
          src="/testimonial.svg"
          alt="About Us"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 p-4 mt-8 md:mt-0">
        <h2 className="text-green-800 font-semibold text-sm uppercase">About Us</h2>
        <h3 className="lg:text-6xl sm:text:5xl text-4xl font-bold text-[#0B3D2C] mt-2">YourTreeGuy Platform</h3>
        <p className="text-gray-600 text-lg mt-4">
          YourTreeGuy is a comprehensive platform dedicated to simplifying tree care for property owners. Our intelligent chatbot provides expert advice, helps identify tree species and diseases, offers real-time pricing for arborist services, and connects users with certified arborists in their area. Whether you're maintaining a single tree or a whole landscape, we're here to make tree care easy and accessible.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
