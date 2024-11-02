import React from 'react';

const testimonials = [
  {
    quote: '"YOURTREEGUY IS A GAME-CHANGER!"',
    position: 'CHIEF MARKETING OFFICER',
    name: 'MONICA M.',
  },
  {
    quote:
      '"AS A PROPERTY MANAGER, MAINTAINING THE TREES ACROSS OUR SITES CAN BE A CHALLENGE. YOURTREEGUY MADE OUR LIVES SO MUCH EASIER!"',
    position: 'CUSTOMER',
    name: 'JESSICA L.',
  },
  {
    quote:
      '"I LOVED HOW EASY IT WAS TO CONNECT WITH AN ARBORIST. TIM WAS EXTREMELY KNOWLEDGEABLE! THANK YOU!"',
    position: 'CUSTOMER',
    name: 'TEDDY M.',
  },
];

const Testimonials = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center text-[#0B3D2C] mb-8">
        PEOPLE SAY ABOUT US
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="text-green-700 text-3xl mb-4">“</div>
            <p className="text-lg font-semibold mb-4 text-[#0B3D2C] h-44">{testimonial.quote}</p>
            <p className="font-bold text-[#0B3D2C]">{testimonial.position}</p>
            <p className="text-green-700">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
