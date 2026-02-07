// components/StatsSection.jsx
import React from "react";

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#00CFB4] to-[#00346F] py-12 sm:py-16 lg:py-24">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left lg:max-w-xl">
            <h3 className="text-[#00346F] text-xs sm:text-lg font-semibold uppercase tracking-wide font-['Lato'] mb-3">
              Seamless Connectivity
            </h3>

            <h2 className="text-white  font-bold font-['Lato'] text-2xl sm:text-3xl md:text-[42px] leading-tight">
              Your Pathway to Hassle-Free <br className="hidden sm:block" />
              Payment Solutions
            </h2>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <div className="space-y-5">
              <p className="text-white text-sm sm:text-base leading-relaxed font-['Roboto']">
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
