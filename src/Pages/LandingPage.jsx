import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import HowItWorks from "../Components/HowItWorks";
import AboutUs from "../Components/AboutUs";
import ChatBot from "../Components/ChatBot";
import ServicesSection from "../Components/ServicesSection";
import VideoSection from "../Components/VideoSection";

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <HeroSection />
      <div className="bg-[#F8F5F0] py-20">
        <div className="w-[80%] mx-auto">
          <HowItWorks />
          <AboutUs />
        </div>
      </div>
      <div className=" bg-white py-16">
      <div className="pb-16 text-center">
        <h2 className="text-green-800 font-semibold text-lg uppercase">Ask AI</h2>
        <h3 className="text-6xl font-bold text-[#0B3D2C] mt-2 uppercase">Your Ai Arborist</h3>
      </div>
      <ChatBot/>
      </div>
      <ServicesSection/>
      <div className="bg-white py-20">
        <div className="w-[80%] mx-auto">
      <VideoSection/>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
