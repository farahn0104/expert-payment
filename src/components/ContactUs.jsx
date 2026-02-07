// components/ContactUs.jsx
import React from 'react';
import { CreditCard, PiggyBank, HeadphonesIcon as Support, Monitor, ArrowRight } from 'lucide-react';

const ContactUs = () => {
  const cards = [
    {
      id: 1,
      icon: <CreditCard className="w-16 h-16 p-3 rounded-full text-[#fff] bg-[#00CFB4]" />,
      title: "New to Cards?",
      description: "In case you set-up your new brand, new business that necessitate card payments, there is no need to worry! Expert Payment offers great introductory prices. Just get in touch and our team of experts can help you choose the right fit, and clarify the difference between credit, debit, and cards to support the customer's development",
      buttonText: "Get Started",
      buttonLink: "https://expertpayment.co.uk/card-machines/",
      animation: "fadeInLeft",
      gradient: false,
      bgColor: "bg-white",
      textColor: '',
      bgIcon:'bg-[#13F9DB]',
    },
    {
      id: 2,
      icon: <PiggyBank className="w-16 h-16 border rounded-full p-3 border-[#13f9db] text-[#13F9DB]" />,
      title: "Switch and Save",
      description: "Swipe card and get evolved with card payments and save average existing charges accordingly. One can switch to Expert Payment and start speedy transactions within the stipulated time. This merely supports multiple customers across the globe to engage with modular payments",
      buttonText: "Get Started",
      buttonLink: "https://expertpayment.co.uk/accept-payments/",
      animation: "fadeInUp",
      bgColor: "bg-gradient-to-br from-[#00CFB4] to-[#00346F]",
      gradient: true,
      textColor: 'text-white',
      bgIcon:'bg-white'
    },
    {
      id: 3,
      icon: <Support className="w-16 h-16 p-3 rounded-full text-[#fff] bg-[#00CFB4]" />,
      title: "Customer Support",
      description: "Our support team constantly takes care for any technical hindrances which might arise while operating with Expert Payment. We are available around the clock and one might get in touch with our technical support team and ask for any support. Our customer support team is working",
      buttonText: "Contact Now",
      buttonLink: "https://expertpayment.co.uk/contact-us/",
      animation: "fadeInUp",
      gradient: false,
      bgColor: "bg-white",
      textColor: '',
      bgIcon:'bg-[#13F9DB]',

    },
    {
      id: 4,
      icon: <Monitor className="w-16 h-16 border rounded-full p-3 border-[#13f9db] text-[#13F9DB]"/>,
      title: "Apply Online",
      description: "Without any hesitations just call us between limited time period and gain free solution for entire threats immediately. Avail top-notch benefits speedily quickly and gain excellent services solves within the stipulated time. Entire card reader with specific can examine product pages and provide more",
      buttonText: "Apply Now",
      buttonLink: "https://expertpayment.co.uk/accept-payments/",
      textColor: 'text-white',
      animation: "fadeInRight",
      gradient: true,
      bgColor: "bg-gradient-to-br from-[#00CFB4] to-[#00346F]",
      bgIcon:'bg-white'
      
    }
  ];

  return (
    <section className="mt-4 py-4 md:py-7 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`group relative  p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 ${card.bgColor}
                  : 'bg-white'
                }`}
              data-aos={card.animation}
            >
              {/* Icon Section */}
              <div className="group-hover:-translate-y-1.5 -top-[6%] left-[40%] absolute flex justify-center mb-6">
                <div className={`${card.bgIcon} rounded-full`}>
                  {card.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="text-center mb-8">
                <h5 className={`group-hover:-translate-y-1.5 mt-4 text-xl font-bold ${card.textColor} text-gray-900 mb-4 font-['Lato']`}>
                  {card.title}
                </h5>
                <p className={`group-hover:-translate-y-1.5 ${card.textColor}  text-gray-600 text-sm leading-relaxed font-['Roboto'] mb-6`}>
                  {card.description}
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-black mb-6"></div>

              {/* Button */}
              <div className="text-center">
                <a
                  href={card.buttonLink}
                  className="hover:-translate-y-1.5 inline-flex items-center gap-2 hover:border border-slate-600 bg-[#00CFB4] hover:bg-gradient-to-r from-[#00CFB4] to-[#00346F] text-white px-6 py-3  font-semibold text-sm uppercase font-['Lato'] hover:opacity-90 transition-opacity"
                >
                  {card.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;