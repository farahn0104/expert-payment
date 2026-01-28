// components/Testimonials.jsx
import { Star } from 'lucide-react';
import React from 'react';

const Testimonials = () => {
  return (
    <section className="pb-16 pt-5 min-h-[550px] bg-gradient-to-br from-[#00CFB4] to-[#00346F] relative overflow-hidden">
      {/* Background Image */}
      <div
        className=" top-12 left-10 max-w-[72%] max-h-[80%] m-auto absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://expertpayment.co.uk/wp-content/uploads/2025/03/phonespot-1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        <div className="absolute inset-0 bg-black/50 z-1"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="flex flex-col justify-center items-center text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 font-['Lato']">
            Our Customers Testimonial
          </h2>


          {/* Stars Rating - Below the card */}

          <div className='flex flex-col justify-center items-center my-auto mt-44'>
            <div className="flex items-center justify-center gap-1 mb-4">
              <Star size={18} className="text-yellow-300 fill-yellow-300" />
              <Star size={18} className="text-yellow-300 fill-yellow-300" />
              <Star size={18} className="text-yellow-300 fill-yellow-300" />
              <Star size={18} className="text-yellow-300 fill-yellow-300" />
              <Star size={18} className="text-yellow-300 fill-yellow-300" />
            </div>

            {/* Second testimonial text below stars */}
            <div className="text-center">
              <p className=" text-white text-base mb-2 font-['Roboto']">
                Expert Payment transformed the way we handle transactions. Secure, fast, and reliable – exactly what our business needed!
              </p>
              <h1 className="text-white font-bold text-lg font-['Lato']">Imtiaz Ansari</h1>
              <h3 className="text-white/80 text-sm font-['Roboto']">Owner, Phone Spot</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;