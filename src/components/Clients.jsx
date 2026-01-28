// components/ContactUsBanner.jsx
import { MessageCircle, Mail, PhoneCall } from 'lucide-react';
import React from 'react';

const Clients = () => {
    const img = [
        { id: 1, img: '/Elavon.webp' },
        { id: 2, img: '/DNA-768x510.webp' },
        { id: 3, img: '/Teya.webp' },
        { id: 4, img: '/worldpay.webp' },

    ]
    return (
        <>
            {/* Expert Payment Section with Background Image */}
            <section className="py-16 relative overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.1
                    }}
                ></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Lato'] leading-tight mb-6">
                            <span className='text-[#00CFB4]'>Expert Payment</span> is trusted by 10K+ users in <br /> the UK
                        </h1>
                        <div className='flex gap-4 justify-center items-center'> 
                            {img.map(item => {
                                return (
                                    <img className='' height={350} key={item.id} width={250} src={item.img} alt="" />
                                )
                            })}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Clients;