// components/Footer.jsx
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00346F] text-white pt-12">
      <div className="grid grid-cols-12 max-w-7xl mx-auto px-4">
        {/* Top section with title and description */}
        <div className=" col-span-4 place-self-start mb-12">
          <img src="/logo.webp" alt=""  className=''/>
          <p className="mt-3 text-gray-300 text-base max-w-3xl mx-auto font-['Roboto']">
            Make your payment process easier, trusted, and secure. Connect with us for expert payment solutions!
          </p>
        </div>

        {/* Four column grid */}

        {/* Column 1: Payments */}
        <div className='ms-10 col-span-2'>
          <h4 className="text-lg font-bold mb-6 font-['Lato'] uppercase">Payments</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Card machines</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Online Payments</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Virtual Terminal</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Unattended Terminals</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Mobile Phone Payments</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Pay By Link</a></li>
          </ul>
        </div>

        {/* Column 2: Quick Link */}
        <div className='col-span-2'>
          <h4 className="text-lg font-bold mb-6 font-['Lato'] uppercase">Quick Link</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Contact us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Card Machine</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Online Payment</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">EPOS</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Biz Funding</a></li>
          </ul>
        </div>

        {/* Column 3: Legals */}
        <div className='col-span-2'>
          <h4 className="text-lg font-bold mb-6 font-['Lato'] uppercase">Legals</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Terms and condition</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Solutions */}
        <div className='col-span-2'>
          <h4 className="text-lg font-bold mb-6 font-['Lato'] uppercase">Solutions</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Payment Gateway</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Services</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Company Formation</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Bank Account Opening</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Utility Management</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-['Roboto']">Margages</a></li>
          </ul>
        </div>

        <div className='flex items-center gap-3'>
          <Facebook className='  p-3'/>
          <Instagram className=' p-3'/>
          <Linkedin className='  p-3'/>
        </div>
      </div>



      {/* Bottom section with logo and copyright */}
      <div className="py-4 border-t border-white">
        <div className="flex flex-col md:flex-row justify-center items-center">

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm font-['Roboto']">
              Copyright © 2022 Expert Payment , All rights reserved. Develop by <span className='text-[#00CFB4]'>Wirecto</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;