// components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const images = [
    'https://expertpayment.co.uk/wp-content/uploads/2025/02/teshero1234.jpeg',
    'https://thepaymentexpert.com/wp-content/uploads/2025/02/2-1.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Automatic slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
      }, 300); // Match this with transition duration
    }, 10000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-10 elementor-section elementor-top-section bg-cover bg-center relative min-h-[90vh] overflow-hidden">
      {/* Background Slideshow with Bluish Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Slideshow Images */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                transition: index === currentImageIndex && fade 
                  ? 'opacity 700ms ease-in-out' 
                  : 'none'
              }}
            ></div>
          ))}
          
          {/* REMOVED: Bluish Overlay */}
          {/* <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 52, 111, 0.7) 0%, rgba(19, 249, 219, 0.2) 100%)'
            }}
          ></div> */}
          
          {/* REMOVED: Dark overlay for better text contrast */}
          {/* <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3))'
            }}
          ></div> */}
        </div>
      </div>

      {/* Content */}
      <div className="elementor-container max-w-7xl mx-auto relative z-10 h-full flex items-center">
        <div className="elementor-column w-full md:w-56% md:mr-44% mb-8">
          <div className="elementor-widget-wrap p-1">
            <div className="text-left mb-8">
              <h3 className="text-[#13F9DB] text-sm md:text-base font-semibold uppercase tracking-wide font-['Lato']">
                YOUR COMPLETE PAYMENT PARTNER
              </h3>
            </div>

            <div className="text-left mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white font-['Lato'] leading-tight">
                Solutions to your <br /> every business <br /> transaction
              </h1>
            </div>

            <div className="text-left mb-8">
              <div className="text-white md:text-md font-light leading-relaxed font-['Roboto']">
                <ul className='list-disc ms-8 inline-block'>
                  <li>UK&apos;s most trusted card payment provider</li>
                  <li>Next day settlement</li>
                  <li>24×7 customer support</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="hover:-translate-y-1.5 hover:bg-gradient-to-br from-[#00CFB4] to-[#00346F] bg-[#00CFB4] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-none border border-transparent font-['Lato'] font-semibold text-sm uppercase flex items-center justify-center gap-2 ">
                Get Started
                <ArrowRight size={20}/>
              </button>

              <button className="hover:-translate-y-1.5 hover:border-none hover:bg-gradient-to-br from-[#00CFB4] to-[#00346F] bg-transparent text-white px-8 sm:px-10 py-3 sm:py-4 rounded-none border border-white font-['Lato'] font-semibold text-sm uppercase flex items-center justify-center gap-2 hover:bg-white/10 ">
                Learn More
                <ArrowRight size={20} />
              </button>
            </div>
            
            {/* Slideshow Indicators (Optional) */}
            <div className="flex gap-2 mt-12">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setFade(true);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-[#13F9DB] scale-110' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for smooth transitions */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .slide-fade-in {
          animation: fadeIn 0.7s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;