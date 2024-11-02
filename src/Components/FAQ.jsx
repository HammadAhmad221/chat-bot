import React, { useState } from 'react';

const faqs = [
  {
    question: 'HOW DOES THE YOURTREEGUY CHATBOT WORK?',
    answer:
      'Gardeners consist of a mix of natural and constructed elements, although Our chatbot uses AI to provide expert tree care advice, identify tree species or diseases, and offer real-time pricing for arborist services.',
  },
  {
    question: 'CAN I UPLOAD PHOTOS FOR TREE IDENTIFY?',
    answer: '',
  },
  {
    question: 'HOW IS PRICING FOR ARBORIST SERVICES DETERMINED?',
    answer: '',
  },
  {
    question: 'HOW CAN I BOOK THROUGH YOURTREEGUY?',
    answer: '',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 md:px-20 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative p-16">
            <img
              src="/faq.svg" // Replace this with the actual image URL
              alt="Tree"
              className="rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/logo.svg" // Replace this with the logo URL
                alt="Logo"
                className="w-36 h-36"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-[#0B3D2C] text-3xl font-bold mb-4">FAQ’S</h2>
          <h3 className="text-2xl font-bold text-[#0B3D2C] mb-6">SOME QUESTIONS</h3>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full flex justify-between items-center text-[#0B3D2C] hover:text-white hover:bg-[#0B3D2C] focus:text-white focus:bg-[#0B3D2C] font-semibold text-left p-4 rounded-full"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span>{activeIndex === index ? '⇓' : '⇨'}</span>
                </button>
                {activeIndex === index && (
                  <p className="mt-2 px-4 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#0B3D2C] text-white p-6 rounded-lg flex flex-col md:flex-row items-center justify-between">
        <h3 className="text-2xl font-bold mb-4 md:mb-0">TREE CARE UPDATES</h3>
        <form className="flex flex-col md:flex-row items-center w-full md:w-auto">
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-md text-black mb-4 md:mb-0 md:mr-4"
          />
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md"
          >
            SUBSCRIBE ➜
          </button>
        </form>
      </div>
    </section>
  );
};

export default FaqSection;
