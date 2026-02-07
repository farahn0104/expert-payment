import React from 'react'
const Breadcrumb = ({ title, bgImage }) => {
  return (
    <section
      className="w-full h-[300px] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay (blur kam, clarity zyada) */}
      <div className="absolute inset-0 bg-[#10446F]/80 flex items-center justify-center">
        <h1
          className="
            text-white
            font-[600]
            leading-[1.1em]
            font-['Lato']
            text-[3.8rem]
            max-md:text-[3rem]
            max-sm:text-[2rem]
          "
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Breadcrumb;
