// components/ContactUsBanner.jsx
import { MessageCircle, Mail, PhoneCall } from 'lucide-react';
import React from 'react';

const ContactUsBanner = () => {
  const cards = [
    {
      id: 1,
      title: "Client Support",
      description: "Our dedicated team offers prompt assistance to ensure smooth payment operations and business continuity",
      buttonText: "Chat Us →",
      icon: <MessageCircle size={50} />
    },
    {
      id: 2,
      title: "Visit us",
      description: "Raise tickets for swift resolutions to your queries and technical issues, with experts ready to assist you",
      buttonText: "Location →",
      icon: <Mail size={50} />
    },
    {
      id: 3,
      title: "Customer Service",
      description: "Experience seamless customer support with personalized and great solutions for your payment needs",
      buttonText: "Call Us →",
      icon: <PhoneCall size={50} />
    }
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
              <h3 className="text-white text-sm md:text-base font-semibold uppercase tracking-wide font-['Lato'] mb-4">
                CONTACT US
              </h3>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-['Lato'] leading-tight">
                Need more help?
              </h2>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='space-y-4'>
                <p className="text-white text-base md:text-lg leading-relaxed font-['Roboto']">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group bg-white rounded-lg p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-6 lg:mb-8">
                <div className='text-[#00CFB4] mb-4'>{card.icon}</div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 font-['Lato']">
                  {card.title}
                </h4>
                <p className="text-gray-600 text-sm lg:text-base font-['Roboto'] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-auto">
                <button className="font-bold bg-[#00CFB4] text-white px-8 py-3 hover:bg-gradient-to-br hover:from-[#00CFB4] hover:to-[#00346F] transition-all duration-300">
                  {card.buttonText}
                </button>
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
            <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-8 font-['Roboto']">
              Join a network of businesses relying on our secure and efficient payment solutions. From startups to established enterprises, we empower companies with cutting-edge technology and unmatched reliability
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsBanner;