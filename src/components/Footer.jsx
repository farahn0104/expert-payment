import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#00346F] text-white pt-7">
      <div className="max-w-7xl mx-auto px-4">

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8">

          {/* Logo + Description */}
          <div className="col-span-2 lg:col-span-4">
            <img src="/logo.webp" alt="Logo" className="w-80" />
            <p className="mt-4 text-gray-300 text-sm max-w-md">
              Make your payment process easier, trusted, and secure. Connect with us for expert payment solutions!
            </p>
          </div>

          {/* Payments */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-lg font-bold mb-5 uppercase">Payments</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Card machines</li>
              <li>Online Payments</li>
              <li>Virtual Terminal</li>
              <li>Unattended Terminals</li>
              <li>Mobile Phone Payments</li>
              <li>Pay By Link</li>
            </ul>
          </div>

          {/* Quick Link */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-lg font-bold mb-5 uppercase">Quick Link</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact us</li>
              <li>Card Machine</li>
              <li>Online Payment</li>
              <li>EPOS</li>
              <li>Biz Funding</li>
            </ul>
          </div>

          {/* Legals */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-lg font-bold mb-5 uppercase">Legals</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Terms and condition</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-lg font-bold mb-5 uppercase">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Payment Gateway</li>
              <li>Services</li>
              <li>Company Formation</li>
              <li>Bank Account Opening</li>
              <li>Utility Management</li>
              <li>Mortgages</li>
            </ul>
          </div>

        </div>

        {/* SOCIAL ICONS */}
        <div className="mt-3 flex justify-center gap-4">
          <div className="p-3 bg-[#5790ca] rounded-full"><Facebook /></div>
          <div className="p-3 bg-[#e86161] rounded-full"><Instagram /></div>
          <div className="p-3 bg-[#0077b5] rounded-full"><Linkedin /></div>
        </div>

        {/* COPYRIGHT */}
        <div className="py-4 mt-8 border-t border-white/30 text-center text-sm text-gray-300">
          Copyright © 2022 Expert Payment. All rights reserved.
          <br />
          Developed by <span className="text-[#00CFB4]">Wirecto</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
