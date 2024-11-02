import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0B3D2C] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        {/* About Us Section */}
        <div>
          <h2 className="font-bold mb-4">ABOUT US</h2>
          <p className="text-sm mb-4">
            YourTreeGuy is your go-to platform for expert tree care advice, species identification, dynamic pricing for arborist services, and direct connection to tree care professionals.
          </p>
          <div className="flex items-center">
            <div className="bg-green-700 p-2 rounded-full mr-2">
              <i className="fas fa-phone-alt"></i>
            </div>
            <span>Emergency Call</span> <strong className="ml-2">911</strong>
          </div>
        </div>

        {/* Main Pages Section */}
        <div>
          <h2 className="font-bold mb-4">MAIN PAGES</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
            <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h2 className="font-bold mb-4">OUR SERVICES</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#tree-care-advice" className="hover:underline">Tree Care Advice</a></li>
            <li><a href="#diagnostics" className="hover:underline">Diagnostics</a></li>
            <li><a href="#dynamic-pricing" className="hover:underline">Dynamic Pricing</a></li>
            <li><a href="#connect-arborist" className="hover:underline">Connect with an Arborist</a></li>
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div>
          <h2 className="font-bold mb-4">GET IN TOUCH</h2>
          <ul className="space-y-2 text-sm">
            <li><i className="fas fa-phone-alt mr-2"></i> 775-240-7662</li>
            <li><i className="fas fa-envelope mr-2"></i> tim@yourtreeguy.com</li>
            <li><i className="fas fa-map-marker-alt mr-2"></i> Tahoe Forestry Consulting LLC</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-xs">
        <p>© 2024 YourTreeGuy. All Rights Reserved. | <a href="#privacy-policy" className="hover:underline">Privacy Policy</a> | <a href="#terms-of-service" className="hover:underline">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;