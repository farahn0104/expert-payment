import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { CreditCard, PiggyBank, Headphones, ShoppingBag, Wallet, CreditCard as CardIcon, RefreshCw, FileText, Smartphone } from 'lucide-react';
import { FaCcAmazonPay, FaCcPaypal, FaCreditCard, FaLinux, FaMobileAlt } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { FaWindows } from "react-icons/fa6";
import { FcPhoneAndroid } from "react-icons/fc";
import { MdOutlineCropRotate, MdOutlineSupportAgent } from "react-icons/md";
import { RiShoppingBag3Line } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { IoIosMailOpen } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";

const services = [
  {
    id: 5,
    title: "Company Formation",
    description: "We assist with company formation, ensuring that all legal and regulatory requirements are fully met, allowing you to focus entirely on your business. Regulatory requirements",
    image: "/company-formation.webp",
    bgColor: "bg-white",
    textColor: "text-[#2F2F2F]",
    button: 'Enquiry Now',
  },
  {
    id: 6,
    title: "Bank Account Opening",
    description: "We simplify the banking setup, offering fast approvals and access to tailored financial solutions that best fit your needs plus cashback offers tailored financial",
    image: "/bank-account-opening.webp",
    bgColor: "bg-gradient-to-br from-[#00CFB4] to-[#00346F]",
    textColor: "text-white",
    button: 'Enquiry Now',
  },
  {
    id: 7,
    title: "Utility Management",
    description: "We also expertly handle Utility Management, optimizing your energy, water, and communication services to save you time and money while ensuring smooth operations and maximizing efficiency",
    image: "/utility-management.webp",
    bgColor: "bg-white",
    textColor: "text-[#2F2F2F]",
    button: 'Enquiry Now',
  },
  {
    id: 8,
    title: "Mortgages",
    description: "We can provide you with competitive rates and personalized advice, helping you secure the financing needed for property investments or business growth",
    image: "/mortgages.webp",
    bgColor: "bg-gradient-to-br from-[#00CFB4] to-[#00346F]",
    textColor: "text-white",
    button: 'Enquiry Now',
  }
];

const paymentCards = [
  {
    id: 1,
    title: "Online Payment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
    buttonText: "Get Started",
    buttonLink: "https://expertpayment.co.uk/card-machines/",
    bgColor: "bg-white",
    textColor: 'text-gray-900',
    IconComponent: CreditCard,
    bgIcon: 'bg-[#00CFB4]',
    iconColor: 'text-white',
    paymentIcons: true,
  },
  {
    id: 2,
    title: "Platform Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
    buttonText: "Get Started",
    buttonLink: "https://expertpayment.co.uk/accept-payments/",
    bgColor: "bg-gradient-to-br from-[#00CFB4] to-[#00346F]",
    textColor: 'text-white',
    IconComponent: PiggyBank,
    bgIcon: 'bg-white',
    iconColor: 'text-[#00CFB4]',
    platformIcons: true,
  },
  {
    id: 3,
    title: "Secure Transaction",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
    buttonText: "Contact Now",
    buttonLink: "https://expertpayment.co.uk/contact-us/",
    bgColor: "bg-white",
    textColor: 'text-gray-900',
    IconComponent: Headphones,
    bgIcon: 'bg-[#00CFB4]',
    iconColor: 'text-white',
    securityIcons: true,
  },
];

const features = [
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

const contactSupport = [
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
    buttonText: "Send Ticket",
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

const Services = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        title={"Services"}
        bgImage={"https://expertpayment.co.uk/wp-content/uploads/2025/02/aboutpage.jpeg"}
      />

      {/* You are not on your own Section */}
      <section className="bg-white pb-16 pt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              You are not on your own
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl mx-auto mb-2">
              Starting a new business can be a daunting task, but with Expert Payment, we make the process smooth and efficient. With our comprehensive solutions and personalized approach, we are dedicated to helping you establish and grow your business seamlessly.
            </p>
            <p className="text-sm text-gray-600 font-medium">We can help you with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((box) => (
              <div
                key={box.id}
                className={`${box.bgColor} group text-center shadow-md hover:shadow-xl transition-shadow duration-300 p-6`}
              >
                <div className="mb-4 flex justify-center">
                  <img src={box.image} alt={box.title} className="w-full h-auto max-w-[180px]" />
                </div>
                <h3 className={`text-lg font-bold mb-3 ${box.textColor}`}>
                  {box.title}
                </h3>
                <p className={`${box.textColor} text-xs leading-relaxed mb-4 ${box.bgColor === 'bg-white' ? 'opacity-80' : ''}`}>
                  {box.description}
                </p>
                <button className="mt-2 group-hover:bg-gradient-to-br from-[#00CFB4] to-[#00346F] bg-[#00CFB4] text-white px-6 py-2.5 text-xs font-bold uppercase transition-all duration-300">
                  {box.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paymentCards.map((card) => {
            const Icon = card.IconComponent;
            return (
              <div
                key={card.id}
                className={`group relative p-8 pt-16 shadow-lg hover:shadow-2xl transition-all duration-300 ${card.bgColor}`}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 group-hover:-translate-y-2 transition-transform duration-300">
                  <div className={`${card.bgIcon} rounded-full w-16 h-16 flex items-center justify-center shadow-md ${card.id === 2 ? 'border-2 border-[#00CFB4]' : ''}`}>
                    <Icon className={`w-8 h-8 ${card.iconColor}`} />
                  </div>
                </div>

                <div className="text-center">
                  <h5 className={`text-xl font-bold ${card.textColor} mb-4 group-hover:-translate-y-1 transition-transform duration-300`}>
                    {card.title}
                  </h5>
                  <p className={`${card.textColor === 'text-white' ? 'text-white' : 'text-gray-600'} text-sm leading-relaxed mb-6 group-hover:-translate-y-1 transition-transform duration-300`}>
                    {card.description}
                  </p>
                </div>


                <div className="w-full h-px bg-gray-300 mb-6"></div>

                <div className="text-center">
                  {card.paymentIcons && (
                    <div className="flex justify-center gap-3 mb-6 text-gray-700">
                      <div className="w-10 font-bold"><FaCcVisa size={25} className="text-blue-900" /></div>
                      <div className="w-10 font-bold"><FaCcMastercard size={25} className="text-blue-900" /></div>
                      <div className="w-10 font-bold"><FaCcVisa size={25} className="text-blue-900" /></div>
                      <div className="w-10 font-bold"><FaCcMastercard size={25} className="text-blue-900" /></div>
                    </div>
                  )}

                  {card.platformIcons && (
                    <div className="flex justify-center gap-4 mb-6 text-white text-xs flex-wrap">
                      <div className="flex items-center gap-3">
                        <span className="text-base"><FaWindows size={25} /></span>
                        <span>Windows</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-base"><FaLinux size={25} /></span>
                        <span>Linux</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-base"><FcPhoneAndroid size={25} /></span>
                        <span>Android/iOS</span>
                      </div>
                    </div>
                  )}

                  {card.securityIcons && (
                    <div className="flex justify-center gap-4 mb-6 text-xs text-gray-700 flex-wrap">
                      <div className="flex items-center gap-3">
                        <span className="text-base"><MdOutlineSupportAgent size={25} className="text-blue-900" /></span>
                        <span className="text-base text-black">24/7 Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div></div>
                        <span className="text-base text-black">Best Secure</span>
                      </div>
                    </div>
                  )}


                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Connection Section */}
      <section className="bg-gradient-to-br from-[#00CFB4] to-[#00346F] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase mb-2 opacity-80 tracking-widest">CONNECTION</p>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Our roadmap to reach your easy payment solution
              </h3>
            </div>

            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <p>
                We simplify your payment journey with seamless onboarding, secure transactions, and reliable support. From setup to daily operations, our step-by-step process ensures a hassle-free payment experience for your business.
              </p>
              <p>
                We guide you through a smooth and efficient payment setup, ensuring fast integration with your business. With secure processing and 24/7 support, managing transactions has never been easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="text-2xl uppercase text-[#13F9DB] mb-2 tracking-tight">FEATURED</p>
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Smart Payment Gateway Solution
            </h3>
            <p className="max-w-5xl mx-auto text-gray-600 text-sm leading-relaxed">
              Experience secure, fast, and reliable payment processing designed to support your business growth. Our advanced gateway ensures seamless transactions, enabling you to focus on delivering exceptional customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((item, index) => {
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

      {/* Contact Us Section */}
      <section className="bg-gradient-to-br from-[#00CFB4] to-[#00346F] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-xl text-blue-950 font-bold uppercase mb-2 opacity-80">CONTACT US</p>
              <h3 className="text-3xl md:text-4xl font-bold">Need more help?</h3>
            </div>

            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <p>
                We're just a message away! Connect with our support team for quick solutions and expert advice tailored to your payment needs.
              </p>
              <p>
                Our expert team ensures a seamless payment experience by providing tailored solutions and dedicated support. With a focus on innovation and customer satisfaction, we help you manage your payment processes effortlessly and securely.
              </p>
            </div>
          </div>


        </div>
      </section>
      <section className="px-16">
        
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactSupport.map((item, index) => (
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
      </section>

      <Footer />
    </>
  );
};

export default Services;