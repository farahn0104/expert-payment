// components/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <section className="relative py-16 md:py-20 -mt-20 z-20 overflow-hidden">
      {/* Background Image - Fixed version */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://expertpayment.co.uk/wp-content/uploads/2025/02/61.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 relative -top-8 z-10">
        <div className="relative">
          <div className="relative bg-white shadow-2xl p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* Left Column - Title Section */}
              <div className="px-4 text-start">
                <h3 className="text-[#13F9DB] text-sm md:text-base font-semibold uppercase tracking-wide font-['Lato'] mb-4">
                  ELCOME TO EXPERT PAYMENT
                </h3>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-['Lato'] leading-tight">
                  Your Pathway to <br />
                  Hassle-Free Payment <br />
                  Solutions
                </h2>
              </div>
              
              {/* Right Column - Content Section */}
              <div className="lg:col-span-2 py-4">
                <div className="space-y-6">
                  <p className="text-gray-700 text-base md:text-md leading-relaxed font-['Roboto']">
                    We guide your business toward effortless payment experiences with secure, innovative, and scalable solutions. Whether you're processing payments online or in-store, our streamlined systems ensure fast, reliable, and secure transactions at every step. Empower your business to thrive with smooth payment operations and exceptional support.
                  </p>
                  
                  <p className="text-gray-700 text-base md:text-md leading-relaxed font-['Roboto']">
                    Experience the freedom of seamless payment processing tailored for your business needs. Our robust solutions empower you to handle transactions effortlessly, enabling growth and customer satisfaction without compromise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;