import React from "react";
import Biography from "../components/Biography";

const AboutUs = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
        {/* Intro section */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-16">
          {/* Text */}
          <div className="w-full min-w-0 md:w-3/5 flex flex-col">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug break-words">
              Learn More About Us | ZeeCare Medical Institute
            </h1>
            <p className="mt-4 sm:mt-6 lg:mt-8 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
              ZeeCare Medical Institute is dedicated to making quality
              healthcare simple, accessible and affordable for everyone. Our
              team of experienced doctors, nurses and support staff works
              across Pediatrics, Orthopedics, Cardiology, Neurology, Oncology
              and Radiology to give every patient accurate diagnosis and
              compassionate treatment.
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
              With modern equipment, clean and comfortable facilities, and an
              easy online appointment system, we save you time and keep your
              care organized from the first visit to follow-up. Your health,
              comfort and trust are at the center of everything we do.
            </p>
          </div>

          {/* Image */}
          <div className="w-full min-w-0 md:w-2/5 flex justify-center">
            <img
              src="/about.png"
              alt="about ZeeCare"
              className="w-full h-auto max-w-sm md:max-w-full object-contain"
            />
          </div>
        </div>

        {/* Biography */}
        <div className="mt-8 md:mt-14">
          <Biography imageUrl="/whoweare.png" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;