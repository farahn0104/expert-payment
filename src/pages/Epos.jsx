import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

const Epos = () => {
    return (
        <div>
            <Header/>
            <Breadcrumb
                bgImage="https://expertpayment.co.uk/wp-content/uploads/2025/02/web_development_header_img.jpg"
                title="EPOS"
            />

            {/* Integrated and standalone EPOS solutions */}
            <section className="max-w-[1200px] mx-auto px-5 py-3">
                <h2 className="text-5xl font-bold text-center mb-5">
                    Integrated and standalone EPOS solutions
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
                    <div>
                        <img 
                            src="https://expertpayment.co.uk/wp-content/uploads/2025/02/aaaaaaaa.jpg" 
                            alt="EPOS System" 
                            className="w-full"
                        />
                    </div>
                    <div>
                        <p className="text-teal-500 text-lg font-semibold mb-4">
                            INTEGRATED AND STANDALONE EPOS SOLUTIONS
                        </p>
                        <p className="text-md text-gray-700 leading-relaxed mb-6">
                            An Electronic Point of Sale (EPOS) system is a computerised till system that helps you manage your business more efficiently. EPOS systems are more sophisticated than ordinary cash registers and can handle all the complex tasks of a modern business, from processing sales transactions to tracking inventory and generating sales reports. They are often used in retail and hospitality businesses, but they can be found in just about any industry.
                        </p>
                        <button className="hover:bg-gradient-to-br from-[#00CFB4] to-[#00346F] bg-[#00CFB4]  text-white px-7 py-3 text-sm  font-bold">
                            Read More →
                        </button>
                    </div>
                </div>
            </section>

            {/* A STAND ALONE EPOS */}
            <section className="max-w-[1200px] mx-auto px-5 py-12">
                <h3 className="text-teal-500 text-lg font-semibold mb-4">
                    A STAND ALONE EPOS
                </h3>
                <p className="text-md text-gray-700 leading-relaxed mb-12">
                    A stand-alone EPOS system can work on its own and is not connected to any other systems. This kind of system is usually smaller and easier to set up and maintain. It can work well in a business that only needs basic point-of-sale features. A standalone EPOS system is a great way to start things out, but it might not be able to do all the work that a more sophisticated system can do. Many of the big box, hospitality and retail systems are Stand Alone.
                </p>
            </section>

            {/* INTEGRATED EPOS SYSTEM - Teal Background */}
            <section className="bg-gradient-to-br py-16">
                <div className="max-w-[1200px] mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
                        <div>
                            <img 
                                src="https://expertpayment.co.uk/wp-content/uploads/2025/02/aaaaaaaa.jpg" 
                                alt="Integrated EPOS" 
                                className="w-full rounded-lg"
                            />
                        </div>
                        <div className="">
                            <h3 className="text-[#00CFB4] text-lg font-semibold mb-4">
                                INTEGRATED EPOS SYSTEM
                            </h3>
                            <p className="text-md leading-relaxed mb-6">
                                An integrated EPOS system is linked to other business systems like accounting software, inventory management, customer relationship management (CRM), and e-commerce platforms. This makes it easier to run the business as a whole because the different parts of the business can talk to each other. This connectivity enables real-time updates and data synchronization across various channels, improving operational efficiency and enabling seamless business processes. An integrated EPOS system is a powerful tool for companies that want more than just a point-of-sale system. An integration EPOS system can help improve their work flow by automatically sending sales information to their accounting system, which can help them save time and reduce errors.
                            </p>
                            <button className="hover:bg-gradient-to-br from-[#00CFB4] to-[#00346F] bg-[#00CFB4]  text-white px-7 py-3 text-sm  font-bold">
                            Read More →
                        </button>
                        </div>
                    </div>

                    {/* Benefits Grid - Top Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Increased efficiency */}
                        <div className="bg-white p-6 rounded-lg text-center">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-[23px] font-bold mb-3">Increased efficiency</h4>
                            <p className="text-md text-gray-700">
                                EPOS systems are able to automate a lot of manual tasks, like keeping track of inventory and making checkout. This makes sales representatives less dependent upon managing transactions.
                            </p>
                        </div>

                        {/* Improved accuracy */}
                        <div className="bg-gradient-to-br from-[#00CFB4] to-[#00346F] bg-[#00CFB4] p-6 rounded-lg text-center text-white">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-[23px] font-bold mb-3">Improved accuracy</h4>
                            <p className="text-md">
                                EPOS systems are less likely to make mistakes than manual systems because they record transactions automatically, resulting in sales and inventory accuracy.
                            </p>
                        </div>

                        {/* Enhanced customer experience */}
                        <div className="bg-white p-6 rounded-lg text-center">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-[23px] font-bold mb-3">Enhanced customer experience</h4>
                            <p className="text-md text-gray-700">
                                EPOS systems can help improve the customer experience through providing real-time information of stock availability and personalised offers, making the checkout faster and providing a more efficient service.
                            </p>
                        </div>
                    </div>

                    {/* Benefits Grid - Middle Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Streamlined inventory management */}
                        <div className="bg-white p-6 rounded-lg text-center">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h4 className="text-[23px] font-bold mb-3">Streamlined inventory management</h4>
                            <p className="text-md text-gray-700">
                                EPOS systems enable businesses to manage their inventory levels in real-time by providing an up-to-date view of stock levels across all locations of any business across the world.
                            </p>
                        </div>

                        {/* Increased profitability */}
                        <div className="bg-gradient-to-br from-[#00CFB4] to-[#00346F] bg-[#00CFB4] p-6 rounded-lg text-center text-white">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h4 className="text-[23px] font-bold mb-3">Increased profitability</h4>
                            <p className="text-md">
                                EPOS systems can help businesses improve their profit margins by streamlining processes, minimising errors, and providing real-time insights on sales and inventory levels.
                            </p>
                        </div>

                        {/* Better data management */}
                        <div className="bg-white p-6 rounded-lg text-center">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h4 className="text-[23px] font-bold mb-3">Better data management</h4>
                            <p className="text-md text-gray-700">
                                EPOS systems automatically store data and reduce mistakes by managing product, customer and sales information in one integrated location.
                            </p>
                        </div>
                    </div>

                    {/* Benefits Grid - Bottom Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
                        {/* Enhanced security */}
                        <div className="bg-white p-6 rounded-lg text-center">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h4 className="text-[23px] font-bold mb-3">Enhanced security</h4>
                            <p className="text-md text-gray-700">
                                Modern EPOS systems are equipped with state of the art security features such as encrypted data, secure payment gateway, and user access control to protect sensitive customer and EPOS business data, helping to prevent data breaches or data exploitation.
                            </p>
                        </div>

                        {/* Scalability */}
                        <div className="bg-gradient-to-br from-[#00CFB4] to-[#00346F] bg-[#00CFB4] p-6 rounded-lg text-center text-white">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                </svg>
                            </div>
                            <h4 className="text-[23px] font-bold mb-3">Scalability</h4>
                            <p className="text-sm">
                                EPOS systems are designed to grow with your business. As your business expands, you can easily add more terminals, locations or features to keep up with changing business model/roadmap and service needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Take your business to the next level */}
            <section className="bg-gradient-to-br from-[#00CFB4] to-[#00346F] bg-[#00CFB4] py-16">
                <div className="max-w-[1200px] h-[350px] mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <img 
                                src="https://expertpayment.co.uk/wp-content/uploads/2025/02/aaaaaaaa.jpg" 
                                alt="Business Growth" 
                                className=""
                                height={450}
                                width={450}
                            />
                        </div>
                        <div className="text-white">
                            <h2 className="text-3xl font-bold mb-6">
                                Take your business to the next level
                            </h2>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="text-xl">✓</span>
                                    <span>Low Margin</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-xl">✓</span>
                                    <span>Great Support</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-xl">✓</span>
                                    <span>Multiple payment options</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-xl">✓</span>
                                    <span>UK Based customer Support</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-xl">✓</span>
                                    <span>Wide range of features - state-of-the-art</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-xl">✓</span>
                                    <span>Easy set-up your merchants account</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAYMENT METHODS */}
            <section className="max-w-[1200px] mx-auto px-5 py-16">
                <p className="text-center text-xl text-[#00bfa6] font-semibold mb-10">
                    ALL MAJOR PAYMENT METHODS ARE ACCEPTED
                </p>

                <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-20">
                    <img src="https://expertpayment.co.uk/wp-content/uploads/2025/02/CreditCard-Logos-1400px-1024x146.png" alt="Payment Methods" className="object-contain max-h-26" />
                </div>

                {/* FEATURES */}
                <p className="text-[#00bfa6] text-xl font-semibold mb-12">FEATURES</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
                    <div className="text-center max-w-[320px] mx-auto">
                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
                            <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <h3 className="text-[20px] font-bold mb-3">Point-of-sale (POS) transactions</h3>
                        <p className="text-[15px]  text-[#333]">
                            Accepting credit and debit cards, cash, and other payment methods.
                        </p>
                    </div>

                    <div className="text-center max-w-[320px] mx-auto">
                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
                            <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                        <h3 className="text-[20px] font-bold mb-3">Inventory management</h3>
                        <p className="text-[14px] leading-relaxed text-[#333]">
                            Tracking, reordering, and reporting inventory levels.
                        </p>
                    </div>

                    <div className="text-center max-w-[320px] mx-auto">
                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
                            <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-[20px] font-bold mb-3">Customer management</h3>
                        <p className="text-[14px] leading-relaxed text-[#333]">
                            Managing customer history, billing, and loyalty programmes.
                        </p>
                    </div>

                    <div className="text-center max-w-[320px] mx-auto">
                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
                            <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-[20px] font-bold mb-3">Real-time sales</h3>
                        <p className="text-[14px] leading-relaxed text-[#333]">
                            Consumer behaviour, and other company analytics reporting.
                        </p>
                    </div>

                    <div className="text-center max-w-[320px] mx-auto">
                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
                            <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </svg>
                        </div>
                        <h3 className="text-[20px] font-bold mb-3">Integration</h3>
                        <p className="text-[14px] leading-relaxed text-[#333]">
                            The capacity to integrate with other systems, such as accounting or CRM.
                        </p>
                    </div>

                    <div className="text-center max-w-[320px] mx-auto">
                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
                            <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-[20px] font-bold mb-3">Customisation</h3>
                        <p className="text-[14px] leading-relaxed text-[#333]">
                            Creating bespoke reporting, payment processes, and inventory systems.
                        </p>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default Epos