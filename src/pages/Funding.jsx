import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import { ArrowRight } from 'lucide-react';

const FundingSection = () => {
    return (
        <>
            <Header />
            <Breadcrumb
                title="Business Funding"
                bgImage={"https://expertpayment.co.uk/wp-content/uploads/2025/02/aboutpage.jpeg"}
            />
            
            <section className="w-full bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-[#00CFB4] text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wide">
                            FAST FUNDING MADE FOR YOU
                        </h1>
                        <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto">
                            Flexible, fast and transparent funding - payable directly from your Expert Payment card machine sales
                        </p>
                    </div>

                    {/* First Grid Section - Apply Online */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Left Image */}
                        <div>
                            <img
                                src="https://expertpayment.co.uk/wp-content/uploads/2025/02/JJ1C0g3IjOSmhHJ4HLWdUqmXvmA.png"
                                alt="Business funding"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>

                        {/* Right Content */}
                        <div>
                            <h2 className="text-gray-900 font-bold text-3xl md:text-4xl mb-6">
                                Apply online in a few steps
                            </h2>

                            <p className="text-gray-700 text-base leading-relaxed mb-4">
                                Getting a business funding with Expert Payment is simple and hassle-free. All it takes is a few minutes to complete your application online.
                            </p>

                            <p className="text-gray-700 text-base leading-relaxed mb-8">
                                Unlike a traditional bank loan, you'll not need lots of paperwork or long in-person meetings. Instead, you can apply online, from the comfort of your home. The application won't affect your credit score and there is no need for you to provide a personal guarantee as collateral.
                            </p>

                            <button className="bg-[#00CFB4] hover:bg-[#00b39f] text-white px-8 py-3 text-base font-semibold inline-flex items-center gap-2 transition-all duration-300 uppercase">
                                Apply Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Second Grid Section - Instant Approval */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-gray-900 font-bold text-3xl md:text-4xl mb-6">
                                Enjoy (almost) instant approval and fast payouts
                            </h2>

                            <p className="text-gray-700 text-base leading-relaxed">
                                With Expert Payment, there's no waiting for weeks to know if your application is approved. Unlike other financing options, you can get a response in minutes. Once your application is approved, your cash will be deposited into your account in hours.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div>
                            <img
                                src="https://expertpayment.co.uk/wp-content/uploads/elementor/thumbs/22-r2csh15ysnw45us2wwcs9rtluctuye25kpu4vub0l4.png"
                                alt="Expert Payment app"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Third Section - Sales-based Payment */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Left Image */}
                        <div>
                            <img
                                src="https://expertpayment.co.uk/wp-content/uploads/2025/02/DALL%C2%B7E-2025-02-24-01.25.05-A-professional-and-modern-business-concept-image-showing-a-financial-transaction-with-a-sales-based-payment-plan.-The-image-includes-a-businessman-in-.webp"
                                alt="Sales based payment plan"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>

                        {/* Right Content */}
                        <div>
                            <h2 className="text-gray-900 font-bold text-3xl md:text-4xl mb-6 leading-tight">
                                Pay for your funding with a sales-based payment plan
                            </h2>

                            <p className="text-gray-700 text-base leading-relaxed">
                                Say goodbye to rigid monthly payments and late fees. <span className="font-bold text-gray-900">Expert Payment</span> gives you access to flexible business funding. Payments are automatically deducted as a percentage of your Expert card machine sales. This payment structure aligns with your revenue cycles and reduces financial stress.
                            </p>
                        </div>
                    </div>

                    {/* Fourth Section - Better Alternative */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-gray-900 font-bold text-3xl md:text-4xl mb-6 leading-tight">
                                A better alternative for small businesses to bank loans
                            </h2>

                            <p className="text-gray-700 text-base leading-relaxed mb-4">
                                Traditional bank loans can be time-consuming, rigid, and challenging for small businesses to secure. They often require extensive paperwork, collateral, and a strong credit score.
                            </p>

                            <p className="text-gray-700 text-base leading-relaxed">
                                This comparison is based on an internal research analysis of various alternatives, using publicly available information.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div>
                            <img
                                src="https://expertpayment.co.uk/wp-content/uploads/2025/02/DALL%C2%B7E-2025-02-24-01.25.05-A-professional-and-modern-business-concept-image-showing-a-financial-transaction-with-a-sales-based-payment-plan.-The-image-includes-a-businessman-in-.webp"
                                alt="Bank loan alternative"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Final Section - How Can We Help */}
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-gray-900 font-bold text-3xl md:text-4xl mb-6">
                            How can Expert Payment help your business?
                        </h2>

                        <p className="text-gray-700 text-base leading-relaxed">
                            Expert Payment empowers your small business with quick access to cash to seize new opportunities or tackle unexpected expenses. Whether you're looking to cover taxes, invest in inventory, expand your business premises or simply manage daily operations more efficiently, this funding solution provides the financial support to help you achieve your goals.
                        </p>
                    </div>
                </div>
            </section>
            
            <Footer />
        </>
    );
};

export default FundingSection;