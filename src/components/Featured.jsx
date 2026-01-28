// components/Featured.jsx
import React from 'react';
import { ShoppingBag, CreditCard, Smartphone, DollarSign, Repeat, Users } from 'lucide-react';

const Featured = () => {
  const services = [
    {
      id: 1,
      icon: <ShoppingBag className="w-12 h-12 text-[#13F9DB]" />,
      title: "Ecommerce Integrations",
      description: "Seamlessly connect your online store with powerful payment solutions, ensuring smooth transactions and an enhanced customer experience",
      animation: "fadeInLeft"
    },
    {
      id: 2,
      icon: <DollarSign className="w-12 h-12 text-[#13F9DB]" />,
      title: "Onsite Payment",
      description: "Offer secure payment options directly on your website to build trust and boost conversions",
      animation: "fadeInUp"
    },
    {
      id: 3,
      icon: <CreditCard className="w-12 h-12 text-[#13F9DB]" />,
      title: "Request Payment",
      description: "Easily send payment requests to your customers with customizable options for convenience",
      animation: "fadeInRight"
    },
    {
      id: 4,
      icon: <Repeat className="w-12 h-12 text-[#13F9DB]" />,
      title: "Automatic Transfer",
      description: "Enable automated fund transfers to streamline your payment processes and save time",
      animation: "fadeInLeft"
    },
    {
      id: 5,
      icon: <CreditCard className="w-12 h-12 text-[#13F9DB]" />,
      title: "Subscriptions",
      description: "Effortlessly manage recurring payments and subscriptions with robust tools for customer retention",
      animation: "fadeInUp"
    },
    {
      id: 6,
      icon: <Smartphone className="w-12 h-12 text-[#13F9DB]" />,
      title: "Mobile Support",
      description: "Enjoy full compatibility with mobile devices, providing flexibility and convenience for your customers on the go",
      animation: "fadeInRight"
    }
  ];

  return (
    <section className="py-2 md:py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#00cfb4] mb-4 font-['Lato']">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              data-aos={service.animation}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4  rounded-full">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-['Lato']">
                  {service.title}
                </h4>
                <p className="text-gray-600 font-['Roboto'] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;