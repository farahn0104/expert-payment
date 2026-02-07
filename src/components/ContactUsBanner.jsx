// components/ContactUsBanner.jsx
import { MessageCircle, Mail, PhoneCall } from 'lucide-react';
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoIosMailOpen } from 'react-icons/io';
import { TiMessages } from 'react-icons/ti';

const ContactUsBanner = () => {
  const cards = [
    {
        title: "Client Support",
        description: "Our dedicated team offers prompt assistance to ensure smooth payment operations and business continuity.",
        buttonText: "Chat Us",
        buttonLink: "https://expertpayment.co.uk/contact-us/",
        icon: <TiMessages size="25" className="text-[#13F9DB] h-10 w-10" />
    ,
      },
      {
        title: "Ticket Support",
        description: "Raise tickets for swift resolutions to your queries and technical issues, with experts ready to assist you.",
        buttonText: "Location ",
        buttonLink: "https://expertpayment.co.uk/contact-us/",
        icon: <IoIosMailOpen size="25" className="text-[#13F9DB] h-10 w-10" />,
      },
      {
        title: "Customer Services",
        description: "Experience seamless customer support with personalized solutions for your payment needs.",
        buttonText: "Call Us",
        buttonLink: "https://expertpayment.co.uk/contact-us/",
        icon: <FiPhoneCall size="25" className="text-[#13F9DB] h-10 w-10" />
    ,
      },
  ];

  return (
    <>
      {/* Contact Us Banner */}
      <section className="bg-gradient-to-r from-[#00CFB4] to-[#00346F] relative overflow-hidden py-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-10 sm:px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            <div className='text-start'>
              <h3 className="text-[#00346F] text-xs sm:text-lg font-semibold uppercase tracking-wide font-['Lato'] mb-3">
              Contact us
            </h3>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-['Lato'] leading-tight">
                Need more help?
              </h2>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='space-y-4'>
                <p className="text-white text-base md:text-md leading-relaxed font-['Roboto']">
                  We're just a message away! Connect with our support team for quick solutions and expert advice tailored to your payment needs.
                </p>
                <p className="text-white text-base md:text-lg leading-relaxed font-['Roboto']">
                  Our expert team ensures a seamless payment experience by providing tailored solutions and dedicated support. With a focus on innovation and customer satisfaction, we help you manage your payment processes effortlessly and securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section - Positioned below the banner */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="relative bottom-14 group bg-white text-gray-900 p-8 shadow-2xl transition-all duration-300"
          >
            <div className="mb-6">
              <div className=" flex items-start justify-start text-2xl mb-4">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>
              <a
                href={item.buttonLink}
                className="inline-flex items-center gap-2 bg-[#00CFB4] group-hover:bg-gradient-to-r from-[#00CFB4] to-[#00346F] text-white px-6 py-2.5 font-bold text-xs uppercase transition-all duration-300"
              >
                {item.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Expert Payment Section with Background Image */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.1
          }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white z-1"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Lato'] leading-tight mb-6">
              <span className='text-[#00CFB4]'>Expert Payment</span> is trusted by 10K+ users in <br /> the UK
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto mb-8 font-['Roboto']">
              Join a network of businesses relying on our secure and efficient payment solutions. From startups <br /> to established enterprises, we empower companies with cutting-edge technology and unmatched <br /> reliability
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsBanner;