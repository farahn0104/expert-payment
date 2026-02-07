import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";

const OnlinePayment = () => {
    return (
        <>
            <Header />
            <Breadcrumb
                bgImage="https://expertpayment.co.uk/wp-content/uploads/2025/02/web_development_header_img.jpg"
                title="Online Payments"
            />
            <section className="max-w-7xl mx-auto px-4 py-10 space-y-20">

                {/* SECTION 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h1 className="text-4xl font-bold leading-tight">
                            Online Payment<br />
                            Simplifying Secure<br />
                            Online Payments for<br />
                            Your Business
                        </h1>

                        <h3 className="mt-6 text-lg font-semibold">Online Payments</h3>

                        <p className="mt-4 text-sm leading-6 max-w-xl">
                            Expert Payment offers a variety of secure and user-friendly solutions to help your business accept payments online.
                            Whether you run an e-commerce store, offer subscription services, or need payment links for easy transactions,
                            we have the right tools for you. Our solutions support all major payment methods, ensuring your customers can
                            pay quickly and securely. With seamless integration, real-time payment tracking, and robust security features,
                            we help you deliver a smooth online payment experience that drives customer satisfaction and business growth.
                        </p>

                        <button className="mt-6 hover:bg-gradient-to-br from-[#00CFB4] to-[#00346F] text-black hover:-translate-y-1.5 hover:text-white px-7 py-4 text-md font-bold">
                            Enquiry Now → 
                        </button>
                    </div>

                    <div>
                        <img
                            src="https://expertpayment.co.uk/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-25-at-03.14.01_7ce971fd-e1740434944155.jpg"
                            alt="Online payment"
                            className="w-full"
                        />
                    </div>
                </div>

                {/* SECTION 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <img
                            src="https://expertpayment.co.uk/wp-content/uploads/2025/02/pngwing.com_.png"
                            alt="Payment Gateway"
                            className="w-full"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold leading-tight">
                            Seamless & Secure<br />
                            Payment Gateway<br />
                            Solutions
                        </h2>

                        <h3 className="mt-6 text-lg font-semibold">Payment Gateway</h3>

                        <p className="mt-4 text-sm leading-6 max-w-xl">
                            Expert Payment provides a secure and reliable payment gateway to help businesses accept online payments
                            with ease. Our gateway supports all major credit and debit cards, UPI, net banking, and digital wallets,
                            ensuring seamless transactions for your customers. With fast processing, robust security features,
                            and easy integration, businesses can offer a smooth checkout experience. Real-time transaction tracking
                            and fraud protection keep your payments secure, while our dedicated support ensures a hassle-free experience.
                            Empower your business with a trusted payment gateway and boost your online sales effortlessly.
                        </p>

                        <button className="mt-6 hover:bg-gradient-to-br from-[#00CFB4] to-[#00346F] text-black hover:-translate-y-1.5 hover:text-white px-7 py-4 text-md font-bold">
                            Enquiry Now → 
                        </button>
                    </div>
                </div>

                {/* SECTION 3 */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h1 className="text-4xl font-bold leading-tight">
                            Online Payment<br />
                            Simplifying Secure<br />
                            Online Payments for<br />
                            Your Business
                        </h1>

                        <h3 className="mt-6 text-lg font-semibold">Online Payments</h3>

                        <p className="mt-4 text-sm leading-6 max-w-xl">
                            Expert Payment offers a variety of secure and user-friendly solutions to help your business accept payments online.
                            Whether you run an e-commerce store, offer subscription services, or need payment links for easy transactions,
                            we have the right tools for you. Our solutions support all major payment methods, ensuring your customers can
                            pay quickly and securely. With seamless integration, real-time payment tracking, and robust security features,
                            we help you deliver a smooth online payment experience that drives customer satisfaction and business growth.
                        </p>

                        <button className="mt-6 hover:bg-gradient-to-br from-[#00CFB4] to-[#00346F] text-black hover:-translate-y-1.5 hover:text-white px-7 py-4 text-md font-bold">
                            Enquiry Now → 
                        </button>
                    </div>

                    <div>
                        <img
                            src="https://expertpayment.co.uk/wp-content/uploads/2025/02/teshero1234.jpeg"
                            alt="Online payment"
                            className="w-full"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );

};

export default OnlinePayment;
