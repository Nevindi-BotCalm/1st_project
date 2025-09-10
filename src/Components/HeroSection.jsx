import React from "react";
import "../App.css";
import bgimg from "../assets/bgimg.png";
import elipse1 from "../assets/Ellipse 1.png";
import elipse3 from "../assets/Ellipse 3.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-[#1090CB1A] pt-4 sm:pt-16 pb-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-[1440px] mx-auto ">

        {/* <img
          src={elipse3}
          alt="Ellipse3"
          className="absolute top-[40px] sm:top-[80px] left-0 w-[160px] sm:w-[240px] md:w-[340px] lg:w-[400px] xl:w-[440px] z-0 opacity-100 animate-bounce"
        /> */}

        <div className="w-full md:w-1/2 text-center md:text-left mt-4 sm:mt-8 md:mt-0">
          <h1 className="text-[25px] sm:text-[28px] md:text-5xl lg:text-5xl font-bold leading-snug sm:leading-tight mb-6 sm:mb-12 break-words">
            Experienced <span className="text-[#1090CB]">mobile and web</span>{" "}
            applications and website <br />
            builders measuring.
          </h1>

          <p className="text-gray-600 text-[12px] sm:text-[15px] mb-4 sm:mb-8 leading-relaxed">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders with dozens of completed projects.
            We build and develop mobile applications for several top platforms,
            including Android & iOS.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">

            <button className="bg-[#1090CB] text-white px-15 py-3 sm:py-4 rounded-md text-sm sm:text-base shadow-md hover:bg-[#0d7fb0] hover:scale-105 hover:shadow-lg active:scale-95 active:bg-[#0c6e96] focus:ring-2 focus:ring-sky-300 transition transform duration-300">
              Contact us
            </button>

            <button className="border border-[#1090CB] text-[#1090CB] px-15 py-3 sm:py-4 rounded-md text-sm sm:text-base bg-white shadow-sm hover:bg-[#f0f9ff] hover:text-[#0d7fb0] hover:-translate-y-1 active:bg-[#e0f2fe] active:scale-95 focus:ring-2 focus:ring-sky-200 transition transform duration-300">
              View more
            </button>


          </div>
        </div>


        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-4 sm:mt-8 md:mt-0">

          <img
            src={elipse1}
            alt="Ellipse1"
            className="absolute top-[60px] sm:top-[102px] left-1/2 md:left-1/3 transform -translate-x-1/2 md:-translate-x-0 w-[200px] sm:w-[280px] md:w-[384px] lg:w-[448px] z-0 opacity-80"
          />


          <img
            src={bgimg}
            alt="Hero Illustration"
            className="relative w-[300px] sm:w-[900px] md:w-[1200px] lg:w-[1300px] max-w-full rotate-0 z-50 -mt-4 sm:-mt-12 md:mt-0"
          />
        </div>
      </div>
    </section>

  );
};

export default HeroSection;