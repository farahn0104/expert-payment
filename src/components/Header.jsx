import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: '/' },
    { name: "About", href: '/about-us' },
    { name: "Card Machines", href: '/card-machines' },
    { name: "Online Payments", href: '/online-payments' },
    { name: "EPOS", href: '/epos' },
    { name: "Funding", href: '/murchant-funding' },
    { name: "Services", href: '/services' },
  ]
  return (
    <>
      {/* HEADER */}

      
      <header className="bg-white shadow-sm py-2 relative z-50">
        <div className="max-w-7xl mx-auto px-3">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <img
              src="https://expertpayment.co.uk/wp-content/uploads/2025/02/GLI9sY_inbox.jpeg"
              alt="Expert Payment Logo"
              className="w-48"
            />

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-lg font-bold text-[#2F2F2F] hover:text-[#00CFB4]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Button */}
            <button className="hidden sm:block font-bold bg-[#00CFB4] text-white px-8 py-3">
              Get An Enquiry
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className=" md:hidden bg-[#00CFB4] p-2 px-4 text-white"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <img
              src="https://expertpayment.co.uk/wp-content/uploads/2025/02/GLI9sY_inbox.jpeg"
              className="w-40"
              alt="logo"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="bg-[#00CFB4] text-white px-4 py-2"
            >
              ✕
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="space-y-6">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-semibold text-black"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
