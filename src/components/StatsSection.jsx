// components/StatsSection.jsx
import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: "Transactions Processed", value: "10M+", suffix: "+" },
    { label: "Happy Customers", value: "50K", suffix: "+" },
    { label: "Countries Supported", value: "150", suffix: "+" },
    { label: "Uptime", value: "99.9", suffix: "%" }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-[#00CFB4] to-[#00346F] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-10 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h3 className="text-[#00346F] text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide font-['Lato'] mb-3 sm:mb-4">
              Seamless Connectivity
            </h3>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-['Lato'] leading-snug sm:leading-tight">
              Your Pathway to Hassle-Free <br className="hidden sm:block" /> Payment Solutions
            </h2>
          </div>

          {/* Right Column - Description */}
          <div className="lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-['Roboto']">
                Transform your payment experience with cutting-edge solutions tailored for your business success. From secure online transactions to advanced POS systems, we provide seamless, efficient, and trustworthy payment services to help your business thrive in today's digital world.
              </p>

              <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-['Roboto']">
                Unlock your business potential with innovative payment solutions designed for your success. From secure online transactions to state-of-the-art POS systems, we deliver reliable, efficient, and seamless payment services that empower your business to grow and excel in the digital era.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;