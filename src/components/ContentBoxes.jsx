// components/ContentBoxes.jsx
import React from 'react';

const ContentBoxes = () => {
  const boxes = [
    {
      id: 1,
      title: "Card Machines",
      description: "Expert Payment offers secure card machines for seamless transaction. Our devices support major cards, contactless payments, Apple Pay, and Google Pay",
      image: "/card-machine.webp",
      bgColor: "bg-gradient-to-br from-[#00CFB4] to-[#00346F]",
      textColor: "text-white",
      button:'enqiry now',
    },
    {
      id: 2,
      title: "EPOS Systems",
      description: "Expert Payment provides advanced POS systems that streamline operations, enabling easy sales management, inventory tracking, and secure payments",
      image: "/epos.webp",
      bgColor: "bg-white",
      textColor: "text-[#2F2F2F]",
      button:'enqiry now',
    },
    {
      id: 3,
      title: "Online Payments",
      description: "Expert Payment provides secure online payment solutions for businesses. Accept payments via e-commerce, subscriptions, or payment links effortlessly effortlessly solutions",
      image: "/online-payments.webp",
      bgColor: "bg-gradient-to-br from-[#00CFB4] to-[#00346F]",
      textColor: "text-white",
      button:'enqiry now',
    },
    {
      id: 4,
      title: "Business Funding",
      description: "Biz Funding offers fast and flexible financial solutions for business growth and enhancement. Secure capital for expansion, inventory, or daily operations with quick approvals and support",
      image: "/bussiness-funding.webp",
      bgColor: "bg-white",
      textColor: "text-[#2F2F2F]",
      button:'enqiry now',
    },
    {
      id: 5,
      title: "Company Formation",
      description: "We assist with company formation, ensuring that all legal and regulatory requirements are fully met, allowing you to focus entirely on your business. Regulatory requirements",
      image: "/company-formation.webp",
      bgColor: "bg-white",
      textColor: "text-[#2F2F2F]",
      button:'enqiry now',
    },
    {
      id: 6,
      title: "Bank Account Opening",
      description: "We simplify the banking setup, offering fast approvals and access to tailored financial solutions that best fit your needs plus cashback offers tailored financial",
      image: "/bank-account-opening.webp",
      bgColor: "bg-gradient-to-br from-[#00CFB4] to-[#00346F]",
      textColor: "text-white",
      button:'enqiry now',
    },
    {
      id: 7,
      title: "Utility Management",
      description: "We also expertly handle Utility Management, optimizing your energy, water, and communication services to save you time and money while ensuring smooth operations and maximizing efficiency",
      image: "/utility-management.webp",
      bgColor: "bg-white",
      textColor: "text-[#2F2F2F]",
      button:'enqiry now',
    },
    {
      id: 8,
      title: "Mortgages",
      description: "We can provide you with competitive rates and personalized advice, helping you secure the financing needed for property investments or business growth",
      image: "/mortgages.webp",
      bgColor: "bg-gradient-to-br from-[#00CFB4] to-[#00346F]",
      textColor: "text-white",
      button:'enqiry now',
    }
  ];

  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-[#2F2F2F] mb-4 font-['Lato']">
            Delivering the Best Payment Solutions for Your Business
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-11">
          {boxes.map((box) => (
            <div key={box.id} className={`${box.bgColor} group text-center  shadow-lg p-6 hover:shadow-xl transition-shadow duration-300`}>
              <div className="text-4xl mb-4">
                <img src={box.image} alt="" />
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${box.textColor} font-['Lato']`}>
                {box.title}
              </h3>
              <p className={`${box.textColor} opacity-90`}>
                {box.description}
              </p>
              <button className="mt-4 m-auto group-hover:bg-gradient-to-br from-[#00CFB4] to-[#00346F] bg-[#00CFB4] text-white px-8 sm:px-8 py-3 sm:py-3 rounded-none border border-transparent font-['Lato'] font-semibold text-sm uppercase flex items-center justify-center gap-2 transition-all duration-300">
                {box.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentBoxes;