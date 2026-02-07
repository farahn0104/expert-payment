// components/Featured.jsx
import React from 'react';
import { ShoppingBag, CreditCard, Smartphone, DollarSign, Repeat, Users } from 'lucide-react';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { GiWallet } from 'react-icons/gi';
import { FaCcAmazonPay, FaCreditCard, FaMobileAlt } from 'react-icons/fa';
import { MdOutlineCropRotate } from 'react-icons/md';

const Featured = () => {
const services = [
  {
    title: "Ecommerce Integrations",
    desc: "Seamlessly connect your online store with powerful payment solutions, ensuring smooth transactions and an enhanced customer experience.",
    IconComponent: RiShoppingBag3Line,
  },
  {
    title: "Onsite Payment",
    desc: "Offer secure payment options directly on your website to build trust and boost conversions.",
    IconComponent: GiWallet,
  },
  {
    title: "Request Payment",
    desc: "Easily send payment requests to your customers with customizable options for convenience.",
    IconComponent: FaCreditCard,
  },
  {
    title: "Automatic Transfer",
    desc: "Enable automated fund transfers to streamline your payment processes and save time.",
    IconComponent: MdOutlineCropRotate,
  },
  {
    title: "Subscriptions",
    desc: "Effortlessly manage recurring payments and subscriptions with robust tools for customer retention.",
    IconComponent: FaCcAmazonPay,
  },
  {
    title: "Mobile Support",
    desc: "Enjoy full compatibility with mobile devices, providing flexibility and convenience for your customers on the go.",
    IconComponent: FaMobileAlt,
  },
];

  return (
    <section className="py-2 md:py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[28px] font-lato leading-tight text-[#00cfb4] mb-4">
            Featured
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-['Lato']">
            Smart Payment Gateway Solution
          </h3>
          <p className="text-gray-600 text-lg max-w-7xl mx-auto font-['Roboto'] leading-relaxed">
            Experience secure, fast, and reliable payment processing designed to support your business growth. Our advanced gateway ensures seamless transactions, enabling you to focus on delivering exceptional customer experiences.
          </p>
        </div>

        {/* Services Grid */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {services.map((item, index) => {
              const Icon = item.IconComponent;
              return (
                <div key={index} className="bg-white p-8 text-center hover:shadow-md shadow-lg border border-gray-100">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-[#00CFB4]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
};

export default Featured;