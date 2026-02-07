import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";

const CardMachines = () => {
    const box = [
        {
            img: "https://www.elavon.co.uk/content/dam/elavon/en-gb/v2/images/2-products/dx8000/Restaurant-Counter-01_v01_DCC.webp",
            title: "Fixed Card Machines",
            desc: "You'll often see fixed card machines at the cash register in shops or restaurants. These card readers are stationary, plugged into one spot on the counter, and so they're perfect for businesses that have a designated checkout area."
        },
        {
            img: "https://www.elavon.co.uk/content/dam/elavon/en-gb/v2/images/2-products/dx8000/Restaurant-Counter-01_v01_DCC.webp",
            title: "Wireless Card Machine",
            desc: "Wireless card machines bring a bit more flexibility to the table. They use WiFi, Bluetooth or cellular data, so they're not tethered by cables: take them directly to customers, whether they're seated"
        },
        {
            img: "https://expertpayment.co.uk/wp-content/uploads/2025/02/33.png",
            title: "Mobile Card Machines",
            desc: "These portable devices connect to smartphones or tablets, typically using Bluetooth. They're ideal for market stalls, pop-up shops or anyone trading outside a traditional shop setting, like taxi drivers and tradespeople for market stalls ."
        },
        {
            img: "https://expertpayment.co.uk/wp-content/uploads/2025/02/22.png",
            title: "Smart Card Machines",
            desc: "These devices combine the hardware and functions of a traditional card machine with extra software features like apps for managing inventory, tracking sales, spotting customer trends and running customer loyalty programmes."
        },
    ]

    return (
        <section className="bg-white">
            <Header />
            <Breadcrumb
                bgImage="https://expertpayment.co.uk/wp-content/uploads/2025/02/web_development_header_img.jpg"
                title="Card Machines"
            />
            <div className="max-w-7xl mx-auto px-4 pb-24 pt-5">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    {/* Text */}
                    <div>
                        <h1 className="text-[42px] font-bold mb-4">Card machines for all kinds of businesses </h1>

                        <p className="text-md text-gray-700 leading-relaxed max-w-xl">
                            To make money, you have to take money. Whether you want to take
                            payments in-person, around your business premises or even when
                            you’re visiting customers, you’ll need a card machine – also
                            known as a point-of-sale (POS) terminal or card reader. Whatever
                            your business, wherever you trade, Expert Payment will get you
                            taking speedy, simple, secure payments.
                        </p>
                    </div>

                    {/* Image */}
                    <div>
                        <img
                            src="https://expertpayment.co.uk/wp-content/uploads/2025/02/33.png"
                            alt="Card machine on table"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Image */}
                    <div>
                        <img
                            src="https://expertpayment.co.uk/wp-content/uploads/2025/02/11.png"
                            alt="Card payment success"
                            className="w-full h-auto"
                        />
                    </div>



                    {/* Text */}
                    <div>

                        <h2 className="text-[42px] font-bold mb-6">
                            How would you like to take card payments?
                        </h2>
                        <p className="text-md text-gray-700 leading-relaxed max-w-xl">
                            Expert Payment offers a wide range of secure and efficient card
                            machines designed to meet your business needs. Whether you need
                            countertop, portable, or mobile card machines, we have the
                            perfect solution to make payment transactions seamless for your
                            customers. Our machines support major credit and debit cards,
                            contactless payments, Apple Pay, and Google Pay. With fast setup,
                            dedicated support, and next-day settlement, we help businesses
                            streamline payment processes effortlessly. Choose from no
                            contract to flexible contract options tailored to your
                            convenience and take your business to the next level.
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-10 mb-20 items-center">
                    <div>
                        <h2 className="text-[42px] font-bold mb-4">
                            Debit Card and Credit Machines
                        </h2>
                        <p className="text-md leading-6 text-gray-700">
                            In this new world of modern technology, there are multiple chances one might need to get excellent payment merchandise for the right processor which can be tricky. People utilize mobile or portable card machines during Point-of-Sale (POS) purchases as these card machines are utilized everywhere. The newest machines which deny power cord are operated remotely and can be easily usable accordingly.
                        </p>
                    </div>

                    <div className="bg-[#DAB17E] rounded-xl max-h-[450px] flex items-center">

                        <img src="https://expertpayment.co.uk/wp-content/uploads/2025/02/6.png" />
                    </div>
                </div>

                <h3 className="text-5xl text-center font-bold mb-14">
                    What are the different types of Card Machine?
                </h3>

                <div className="grid md:grid-cols-4 gap-8">
                    {box.map((title, index) => (
                        <div key={index} className="group text-center">
                            <img src={title.img} className="mb-4" />
                            <h4 className="font-bold mb-2">{title.title}</h4>
                            <p className="text-xs text-gray-700 mb-4">
                                {title.desc}
                            </p>
                            <button className="group-hover:bg-gradient-to-br from-[#00CFB4] to-[#00346F] bg-[#00CFB4] text-white text-sm px-7 py-3">
                                Find Out More
                            </button>
                        </div>
                    ))}
                </div>

            </div>
            <Footer />
        </section>
    );
};

export default CardMachines;