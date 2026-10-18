import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-6">
      <div className="w-full md:w-1/2">
        <img
          src={imageUrl}
          alt="aboutImg"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      <div
        className="
          w-full md:w-1/2
          max-h-[55vh] md:max-h-[70vh]
          overflow-y-scroll pr-2
          overscroll-contain
          space-y-3 py-2 md:py-4
          [scrollbar-width:thin] [scrollbar-color:#9ca3af_#f3f4f6]
          [&::-webkit-scrollbar]:w-1.5
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-gray-400
          [&::-webkit-scrollbar-thumb]:rounded-full
        "
      >
        <h2 className="text-lg sm:text-xl md:text-2xl">Biography</h2>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Who We Are</h1>

        <p className="text-sm sm:text-base leading-relaxed">
          We are ZeeCare Hospital, a premier healthcare provider committed to
          delivering high-quality medical services. Our team consists of expert
          doctors specializing in Pediatrics, Orthopedics, Cardiology,
          Neurology, Oncology, and Radiology, ensuring comprehensive care for
          all patients. With state-of-the-art facilities and advanced medical
          technology, we strive to offer personalized and effective treatment.
          Our mission is to promote health and well-being, making healthcare
          accessible and affordable. At ZeeCare, patient care and satisfaction
          are our utmost priorities. We focus on compassionate care, ensuring
          every patient feels valued and supported. Our streamlined appointment
          system allows for convenient scheduling at your preferred time. Trust
          ZeeCare for a reliable and caring healthcare experience.
        </p>

        <div className="text-sm sm:text-base space-y-1">
          <p>Established: 2001</p>
          <p>Head Office: Selli Nyay</p>
          <p>Runs: In All State</p>
        </div>
      </div>
    </div>
  );
};

export default Biography;