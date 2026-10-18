import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <section className="w-full max-w-7xl mx-auto pt-4 md:pt-6 pb-6 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug break-words">
          {title}
        </h1>
        <p className="mt-4 text-sm sm:text-base leading-relaxed">
          ZeeCare Hospital offers comprehensive medical services across various
          specialties including Pediatrics, Orthopedics, Cardiology, Neurology,
          Oncology, and Radiology. Our team of expert doctors is available to
          provide the best care for you and your family.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={imageUrl}
          alt="hero"
          className="w-full h-auto max-h-none md:max-h-[24rem] lg:max-h-[28rem] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;