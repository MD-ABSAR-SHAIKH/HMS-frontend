// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const Department = () => {
//   const departmentsArray = [
//     {
//       name: "Pediatrics",
//       imageUrl: "/departments/pedia.jpg",
//     },
//     {
//       name: "Orthopedics",
//       imageUrl: "/departments/ortho.jpg",
//     },
//     {
//       name: "Cardiology",
//       imageUrl: "/departments/cardio.jpg",
//     },
//     {
//       name: "Neurology",
//       imageUrl: "/departments/neuro.jpg",
//     },
//     {
//       name: "Oncology",
//       imageUrl: "/departments/onco.jpg",
//     },
//     {
//       name: "Radiology",
//       imageUrl: "/departments/radio.jpg",
//     },
//     {
//       name: "Physical Therapy",
//       imageUrl: "/departments/therapy.jpg",
//     },
//     {
//       name: "Dermatology",
//       imageUrl: "/departments/derma.jpg",
//     },
//     {
//       name: "ENT",
//       imageUrl: "/departments/ent.jpg",
//     },
//   ];
//   const responsive = {
//     extraLarge: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 3000, min: 1324 },
//       items: 4,
//       SlideToSlide: 1,
//     },
//     large: {
//       breakpoint: { max: 1324, min: 1005 },
//       items: 3,
//       SlideToSlide: 1,
//     },
//     medium: {
//       breakpoint: { max: 1005, min: 700 },
//       items: 2,
//       SlideToSlide: 1,
//     },
//     small: {
//       breakpoint: { max: 700, min: 0 },
//       items: 1,
//       SlideToSlide: 1,
//     },
//   };
//   return (
//     <div>
//       <h2>Departments</h2>
//       <Carousel responsive={responsive} removeArrowOnDeviceType={"small"}>
//         {departmentsArray.map((depart, index) => {
//           return (
//             <div key={index}>
//               <div className="">{depart.name}</div>
//               <div className="h-full">
//                 <img src={depart.imageUrl} alt={depart.name} className="object-contain" />
//               </div>
//             </div>
//           );
//         })}
//       </Carousel>
//       ;
//     </div>
//   );
// };
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Department = () => {
  const departmentsArray = [
    { name: "Pediatrics", imageUrl: "/departments/pedia.jpg" },
    { name: "Orthopedics", imageUrl: "/departments/ortho.jpg" },
    { name: "Cardiology", imageUrl: "/departments/cardio.jpg" },
    { name: "Neurology", imageUrl: "/departments/neuro.jpg" },
    { name: "Oncology", imageUrl: "/departments/onco.jpg" },
    { name: "Radiology", imageUrl: "/departments/radio.jpg" },
    { name: "Physical Therapy", imageUrl: "/departments/therapy.jpg" },
    { name: "Dermatology", imageUrl: "/departments/derma.jpg" },
    { name: "ENT", imageUrl: "/departments/ent.jpg" },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="w-full max-w-full overflow-x-clip px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="my-5 text-center text-2xl font-bold sm:text-3xl">
        Departments
      </h2>

      <div className="mx-auto w-full max-w-7xl">
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["small"]}
          swipeable
          draggable
          infinite
          keyBoardControl
          containerClass="department-carousel"
          itemClass="px-2 sm:px-3"
        >
          {departmentsArray.map((depart) => (
            <div
              key={depart.name}
              className="flex h-full min-w-0 flex-col items-center rounded-lg p-3"
            >
              <h3 className="mb-3 text-center text-base font-semibold sm:text-lg">
                {depart.name}
              </h3>

              <div className="flex h-52 w-full items-center justify-center sm:h-56 md:h-60 lg:h-64">
                <img
                  src={depart.imageUrl}
                  alt={depart.name}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Department;