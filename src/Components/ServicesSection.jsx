import React from 'react'

const ServicesSection = () => {
  const services = [
    {
      title: "Tree Advice",
      description: "Receive expert guidance for tree care and maintenance.",
      image: "/service1.svg",
      icon: "/logo1.svg",
    },
    {
      title: "Species and Disease Identification",
      description: "Upload images to identify tree species or diseases.",
      image: "/service2.svg",
      icon: "/logo2.svg",
    },
    {
      title: "Arborist Pricing",
      description: "Get real-time quotes tailored to your service needs.",
      image: "/service3.svg",
      icon: "/logo3.svg",
    },
    {
      title: "Connect with a Pro",
      description: "Easily connect and book certified arborists near you.",
      image: "/service4.svg",
      icon: "/logo4.svg",
    },
  ];

  return (
    <section className="bg-[#F6F3EE] py-8 px-4 md:px-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24">
          {services.map((service, index) => (
            <div key={index} className="text-center relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover rounded-lg mb-8"
              />
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="mx-auto w-20 h-20 absolute z-10 top-[55%] left-[35%]"
              />
              <h3 className="font-bold text-lg text-[#0B3D2C]">{service.title}</h3>
              <p className="text-[#777777] text-sm mt-2">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-[#0B3D2C] text-white p-6 rounded-b-lg mt-6 text-center">
          <h3 className="font-bold text-lg mb-2">
            Harness the power of AI to get instant advice for all of your tree care needs.
          </h3>
          <button className="bg-white text-[#0B3D2C] font-semibold py-2 px-4 rounded-full mt-4 hover:bg-gray-200">
            Start Chatting
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection;