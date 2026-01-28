// components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <>
      <header className="elementor-section elementor-top-section bg-white shadow-sm py-2">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://expertpayment.co.uk/wp-content/uploads/2025/02/GLI9sY_inbox.jpeg"
                alt="Expert Payment Logo"
                className="w-48 "
              />

              {/* <span className="text-xl font-bold text-[#2F2F2F]">expertpayment.co.uk</span> */}
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="active text-xl font-bold text-[#2F2F2F] text-[#2F2F2F] hover:text-[#00CFB4] transition-colors">Home</a>
              <a href="/" className="text-xl font-bold text-[#2F2F2F] text-[#2F2F2F] hover:text-[#00CFB4] transition-colors">About Us</a>
              <a href="/" className="text-xl font-bold text-[#2F2F2F] text-[#2F2F2F] hover:text-[#00CFB4] transition-colors">Card Machine</a>
              <a href="/" className="text-xl font-bold text-[#2F2F2F] text-[#2F2F2F] hover:text-[#00CFB4] transition-colors">Online Payments</a>
              <a href="/" className="text-xl font-bold text-[#2F2F2F] text-[#2F2F2F] hover:text-[#00CFB4] transition-colors">EPOS</a>
              <a href="/" className="text-xl font-bold text-[#2F2F2F] text-[#2F2F2F] hover:text-[#00CFB4] transition-colors">Funding</a>
              <a href="/" className="text-xl font-bold text-[#2F2F2F] text-[#2F2F2F] hover:text-[#00CFB4] transition-colors">Services</a>
            </nav>
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
              <button className=' font-bold bg-[#00CFB4] text-white hover:bg-gradient-to-br hover:border-black from-[#00CFB4] to-[#00346F] border px-8 py-3 '>Get A Enquiry</button>
            
          </div>
        </div>
      </header>
{/* 

*/}

      {/* Meta tags for SEO */}
      <meta name="description" content="Our expert payment ensures seamless transactions, enabling you to focus on delivering exceptional customer experiences." />
      <meta property="og:title" content="Expert payment - expertpayment.co.uk" />
      <meta property="og:description" content="Our expert payment ensures seamless transactions, enabling you to focus on delivering exceptional customer experiences." />
      <meta property="og:image" content="https://expertpayment.co.uk/wp-content/uploads/2025/02/teshero1234.jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Expert payment - expertpayment.co.uk" />
      <meta name="twitter:description" content="Our expert payment ensures seamless transactions, enabling you to focus on delivering exceptional customer experiences." />
      <meta name="twitter:image" content="https://expertpayment.co.uk/wp-content/uploads/2025/02/teshero1234.jpeg" />
    </>
  );
};

export default Header;