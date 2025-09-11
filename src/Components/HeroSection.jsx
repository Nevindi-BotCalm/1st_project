import React from "react";
import "../App.css";
import bgimg from "../assets/bgimg.png";
import elipse1 from "../assets/Ellipse 1.png";
import right from "../assets/right.png"
import Frame20 from "../assets/Frame 20.png"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-[#1090CB1A] pt-4sm:pt-16 pb-12 px-4 sm:px-8 md:px-16  lg:px-24 xl:px-32 2xl:px-40">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-[1440px] mx-auto ">


        <div className="w-full ml-35 md:w-1/2 text-center md:text-left mt-4 sm:mt-8 md:mt-0 relative">
          {/* Radial gradient */}
          <div className="absolute inset-0 mt-2 ml-2 z-0 bg-[radial-gradient(50.77%_50.77%_at_40%_50%,_#DED9FF_0%,_rgba(255,255,255,0)_100%)] pointer-events-none"
          ></div>


          <h1 className="relative z-10 text-[25px] sm:text-[28px] md:text-5xl lg:text-5xl font-bold leading-snug sm:leading-tight mb-6 sm:mb-12 break-words">
            Experienced <span className="text-[#1090CB]">mobile and web</span>{" "}
            applications and website <br />
            builders measuring.
          </h1>

          <p className="relative z-10 text-gray-600 text-[12px] sm:text-[15px] mb-4 sm:mb-8 leading-relaxed">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders with dozens of completed projects.
            We build and develop mobile applications for several top platforms,
            including Android & iOS.
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button className="bg-[#1090CB] cursor-pointer text-white px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg shadow-md hover:bg-[#0d7fb0] hover:scale-105 hover:shadow-lg active:scale-95 active:bg-[#0c6e96] focus:ring-2 focus:ring-sky-300 transition transform duration-300">
              Contact us
            </button>

            <button className="border border-[#1090CB] cursor-pointer text-[#1090CB] px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg bg-white shadow-sm hover:bg-[#f0f9ff] hover:text-[#0d7fb0] hover:-translate-y-1 hover:scale-105 hover:shadow-lg active:scale-95 active:bg-[#e0f2fe] focus:ring-2 focus:ring-sky-200 transition transform duration-300">
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

          <img
            src={right}
            alt="Hero Illustration"
            className="absolute top-[272px] left-[675px] hidden md:block"
          />

          <img
  src={Frame20}
  alt="Hero Illustration"
  className="block ml-10 mt-[500px]"
/>






        </div>
      </div>
    </section>

  );
};

export default HeroSection;