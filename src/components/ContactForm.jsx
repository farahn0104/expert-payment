// components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2F2F2F] mb-4 font-['Lato']">
            Get In Touch
          </h2>
          <p className="text-[#2F2F2F]">
            Have questions? Our team is here to help you get started.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#00CFB4]/10 to-[#00346F]/10 rounded-xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#2F2F2F] mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CFB4] focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-[#2F2F2F] mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CFB4] focus:border-transparent"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[#2F2F2F] mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CFB4] focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-[#2F2F2F] mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CFB4] focus:border-transparent"
                placeholder="Tell us about your payment processing needs..."
                required
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="consent"
                className="w-4 h-4 text-[#00CFB4] border-gray-300 rounded focus:ring-[#00CFB4]"
                required
              />
              <label htmlFor="consent" className="ml-2 text-sm text-[#2F2F2F]">
                I agree to the terms and conditions and privacy policy
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#00CFB4] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#00b89f] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#00CFB4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#00CFB4]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h4 className="font-semibold text-[#2F2F2F] mb-2">Phone Support</h4>
            <p className="text-[#2F2F2F]/80">+7 493 333 03 37</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#00CFB4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#00CFB4]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h4 className="font-semibold text-[#2F2F2F] mb-2">Email Us</h4>
            <p className="text-[#2F2F2F]/80">support@expertpayment.co.uk</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#00CFB4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#00CFB4]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-semibold text-[#2F2F2F] mb-2">Office Location</h4>
            <p className="text-[#2F2F2F]/80">123 Business Street, London, UK</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;