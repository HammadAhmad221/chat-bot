// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="font-bold text-lg">
        TAHOE FORESTRY CONSULTING LLC
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-green-300">Home</a>
        <a href="#how-it-works" className="hover:text-green-300">How It Works</a>
        <a href="#services" className="hover:text-green-300">Services</a>
        <a href="#chatbot" className="hover:text-green-300">Chatbot</a>
        <a href="#blogs" className="hover:text-green-300">Blogs</a>
        <a href="#contact" className="hover:text-green-300">Contact</a>
      </nav>
      <button className="text-white bg-green-900 px-4 py-2 rounded-full font-bold">
        Get Started
      </button>
    </header>
  );
};

export default Header;
