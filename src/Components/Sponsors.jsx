import React from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";

const features = [image1, image2, image3, image4];

const Sponsors = () => {
  return (
    <div className="relative w-full max-w-screen-2xl mx-auto mt-12 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <p className="text-gray-900 font-semibold text-xl sm:text-2xl text-center mb-8">
        You will be in good Company
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-12 md:gap-16">
        {features.map((icon, i) => (
          <div key={i} className="w-1/2 sm:w-1/4 md:w-1/6 flex justify-center">
            <img
              src={icon}
              alt={`Sponsor ${i + 1}`}
              className="w-full max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
