// components/Footer.jsx
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00346F] text-white pt-8 sm:pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-6">
          {/* Top section with title and description */}
          <div className="sm:col-span-2 lg:col-span-4 place-self-start mb-8 sm:mb-12">
            <img
              src="/logo.webp"
              alt="Logo"
              className="w-32 sm:w-40 md:w-48"
            />
            <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base max-w-lg font-['Roboto']">
              Make your payment process easier, trusted, and secure. Connect with us for expert payment solutions!
            </p>
          </div>

          {/* Four column grid */}

          {/* Column 1: Payments */}
          <div className="sm:col-span-1 lg:col-span-2 ">
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 font-['Lato'] uppercase">Payments</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Card machines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Online Payments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Virtual Terminal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Unattended Terminals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Mobile Phone Payments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Pay By Link</a></li>
            </ul>
          </div>

          {/* Column 2: Quick Link */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 font-['Lato'] uppercase">Quick Link</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Contact us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Card Machine</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Online Payment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">EPOS</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Biz Funding</a></li>
            </ul>
          </div>



          {/* Column 4: Solutions */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 font-['Lato'] uppercase">Solutions</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Payment Gateway</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Company Formation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Bank Account Opening</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Utility Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Margages</a></li>
            </ul>
          </div>
          {/* Column 3: Legals */}
          <div className="col-span-2 sm:place-items-start place-items-center  sm:col-span-1 lg:col-span-2">
            <h4 className="text-start text-base sm:text-lg font-bold mb-4 sm:mb-6 font-['Lato'] uppercase">Legals</h4>
            <ul className="sm:text-start text-center space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Terms and condition</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-['Roboto']">Cookie Policy</a></li>
            </ul>
          </div>
          {/* Social Media Icons */}
          {/* <div className="col-span-1 mt-8 sm:mt-10 flex justify-center sm:justify-start items-center gap-2 sm:gap-3">
            <div className="p-2 sm:p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="p-2 sm:p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="p-2 sm:p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom section with copyright */}
      <div className="mt-8 sm:mt-12 py-4 border-t border-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-gray-300 text-xs sm:text-sm font-['Roboto']">
              Copyright © 2022 Expert Payment, All rights reserved. Develop by <span className="text-[#00CFB4]">Wirecto</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;