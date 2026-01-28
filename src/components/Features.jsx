// components/Features.jsx
import { Calculator, ClockFading, Handshake, ReceiptText } from 'lucide-react';
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: <ClockFading size={50} />
      ,
      title: "Next-day settlement",
      description: "It's your money, so why wait for It? Keep your cash flowing with next-day settlement"
    },
    {
      icon: <Calculator size={50} />,
      title: "15 years f experience",
      description: "With 15 years of experience, we provide trusted, secure, and efficient payment solutions for businesses"
    },
    {
      icon: <Handshake size={50} />
      ,
      title: "You're not on your own",
      description: "Our dedicated Welcome Team will get you transacting quickly and confidently, and will be there if you've any questions"
    },
    {
      icon: <ReceiptText size={50} />
      ,
      title: "Zero Contract",
      description: "Enjoy complete flexibility with our zero-contract payment solutions, giving you the freedom to grow your business without commitments"
    }
  ];

  return (
    <section className=" py-16 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#2F2F2F] mb-4 font-['Lato']">
            Why Choose Expert Payment?
          </h2>
        </div>

        <div className="border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className=" bg-white rounded-lg shadow-lg py-4 px-12 hover:shadow-xl transition-shadow duration-300">
              <div className="pt-5 place-items-center text-5xl mb-6 text-center text-[#00CFB4]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center font-['Lato'] text-[#2F2F2F]">
                {feature.title}
              </h3>
              <p className="text-[#2F2F2F] text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;