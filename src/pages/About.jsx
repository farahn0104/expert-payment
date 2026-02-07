import React from 'react'
import Footer from '../components/Footer'
import Headers from '../components/Header'

const About = () => {
    return (
        <div>
            <Headers />

            {/* Hero Section */}
            <section className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://expertpayment.co.uk/wp-content/uploads/2025/02/aaaaaaaa.jpg')" }}>
                <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">About Us</h1>
                </div>
            </section>

            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 py-20">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        {/* Content */}
                        {/* Image */}
                        <div>
                            <img
                                src="https://expertpayment.co.uk/wp-content/uploads/2025/02/aaaaaaaa.jpg"
                                alt="Tools that put you in control"
                                className="w-full h-auto"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-6">
                                Tools that put you in control
                            </h2>
                            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                We help customers accept card payments, trade securely and get
                                paid fast. From busy baristas brewing cups in cafes, to expanding
                                enterprises looking for faster terminals, we make payments work
                                for your business or enterprise – no matter its size.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Whether you trade in person, through a website, or over the
                                phone, we've got a wide selection of merchant services to choose
                                from. From payment links to business funding, we take care of
                                the basics – so you can focus on the things that truly make the
                                difference.
                            </p>
                        </div>
                        
                    </div>

                    {/* Bottom Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text */}
                        <div>
                            <h2 className="text-4xl font-bold mb-6">
                                Support when you need it most
                            </h2>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                We may be tech-enabled but we're people-powered and proud of it.
                                Our friendly UK team are passionate about delivering the best
                                possible support for you and your business or enterprise – we're
                                always on hand getting started, or just have a query about your
                                account. We can even log into your device remotely to help out
                                when you need a hand. That's one less thing to worry about.
                            </p>
                        </div>

                        {/* Image */}
                        <div>
                            <img
                                src="https://a.storyblok.com/f/267449/1000x880/ddd8e1e9e3/customer-support.png/m/640x563"
                                alt="Support when you need it most"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Teal Background Section - Roadmap */}
            <section className="bg-teal-500 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Right Side - Content */}
                        <div className="text-white col-span-1">

                            <h1 className='uppercase text-blue-950 font-bold text-xl'>Connection</h1>
                            <h2 className="text-4xl font-bold mb-8">
                                Our Roadmap to Your Easy Payment Solution
                            </h2>

                        </div>
                        <div className='text-white'>

                            <p className="text-sm mb-6">
                                We pave the way for seamless and efficient payment solutions
                                tailored to your business needs. From initial integration to
                                ongoing support, our step-by-step approach ensures smooth
                                operations and secure transactions.
                            </p>
                            <p className="text-sm font-semibold mb-4">Our roadmap includes:</p>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-3">
                                    <span>Customized Setup: Quick and hassle-free onboarding for your business.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span>Secure Transactions: Cutting-edge security for safe payment processing.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span>Reliable Support: Dedicated assistance to keep your payment processes running smoothly.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">
                        <span className="text-teal-500">Expert Payment</span> is trusted by 10K+ users <br /> in the UK
                    </h2>
                    <p className="text-md text-gray-700 max-w-3xl mx-auto">
                        Join a network of businesses relying on our secure and efficient
                        payment solutions. From startups to established enterprises, we
                        empower companies with cutting-edge technology and unmatched
                        reliability.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    {/* Image */}
                    <div>
                        <img
                            src="https://home.foxcreation.net/paytrend/wp-content/uploads/sites/3/2023/12/testimonials.jpg"
                            alt="Testimonial"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="bg-gray-50 p-8 rounded-lg relative">
                        <div className="absolute top-4 right-8">
                            <svg className="w-16 h-16 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>
                        <p className="text-teal-500 font-semibold text-lg mb-2">TESTIMONIALS</p>
                        <h3 className="text-5xl font-bold mb-4">What client say about us</h3>
                        <p className="italic text-md text-gray-700 mb-6">
                            Seamless integration and top-notch customer support. Highly
                            recommended for any business looking for an efficient payment
                            solution!
                        </p>

                        <div className="flex items-center gap-4">
                            <img
                                src="https://expertpayment.co.uk/wp-content/uploads/2025/03/spiceof-asia.jpg"
                                alt="Client"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-lg font-semibold">Swapnil Rana</p>
                                <p className="text-sm text-teal-500">Owner, Spice of Asia</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partners */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-12">
                        <span className="text-teal-500">Expert Payment</span> Trusted Partners
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                        <div className="flex items-center justify-center">
                            <img src="https://expertpayment.co.uk/wp-content/uploads/2025/02/DNA-2048x1359.png" alt="Partner" className="max-h-30" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="https://expertpayment.co.uk/wp-content/uploads/2025/02/Teya.jpg" alt="Partner" className="max-h-30" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="https://expertpayment.co.uk/wp-content/uploads/2025/02/worldpay.jpg" alt="Partner" className="max-h-30" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="https://expertpayment.co.uk/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-23-at-04.22.55_38d89d18-e1740265060138.jpg" alt="Partner" className="max-h-30 border" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About