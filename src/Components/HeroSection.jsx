import React from "react";
import "../App.css";
import bgimg from "../assets/bgimg.png";
import elipse1 from "../assets/Ellipse 1.png";
import elipse2 from "../assets/Ellipse 2.png";

const HeroSection = () => (
  <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-[#1090CB1A] px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-12 md:py-20 max-w-screen-2xl mx-auto">


    <div className="w-full md:w-1/2 max-w-2xl text-center md:text-left mt-10 md:mt-0">





      <div className="relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-6">
          Experienced <span className="text-[#1090CB]">mobile and web</span> <br />
          applications and website <br />
          builders measuring.
        </h1>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders with dozens of completed projects.
          We build and develop mobile applications for several top platforms,
          including Android & iOS.
        </p>

      </div>


      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
        <button className="bg-[#1090CB] text-white px-6 py-3 rounded-md text-sm sm:text-base shadow-md hover:bg-[#0d7fb0] transition">
          Contact us
        </button>
        <button className="border border-[#1090CB] text-[#1090CB] px-6 py-3 rounded-md text-sm sm:text-base bg-white shadow-sm hover:bg-[#f0f9ff] transition">
          View more
        </button>
      </div>
    </div>

    <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">

      <img
        src={elipse1}
        alt="Ellipse1"
        className="absolute top-0 md:top-10 left-1/2 md:left-1/3 transform -translate-x-1/4 md:-translate-x-0 w-64 sm:w-80 md:w-96 lg:w-[28rem] z-0 opacity-100"
      />

      <img
        src={bgimg}
        alt="Hero Illustration"
        className="relative w-72 sm:w-80 md:w-96 lg:w-[38rem] z-10"
      />


    </div>
  </section>
);

export default HeroSection;
