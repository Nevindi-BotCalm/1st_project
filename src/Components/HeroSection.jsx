import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import bgimg from "../assets/bgimg.png";
import elipse1 from "../assets/Ellipse 1.png";

const HeroSection = () => {

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const floatAnimation = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: { duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
    },
  };

  return (
    <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-[#1090CB1A] px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-12 md:py-20 max-w-screen-full mx-auto">

      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 max-w-2xl text-center md:text-left mt-10 md:mt-0"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-6"
          variants={textVariant}
        >
          Experienced <span className="text-[#1090CB]">mobile and web</span> <br />
          applications and website <br />
          builders measuring.
        </motion.h1>

        <motion.p
          className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-8 leading-relaxed"
          variants={textVariant}
        >
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders with dozens of completed projects.
          We build and develop mobile applications for several top platforms,
          including Android & iOS.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
          <motion.button
            className="bg-[#1090CB] text-white px-6 py-3 rounded-md text-sm sm:text-base shadow-md hover:bg-[#0d7fb0] transition"
            variants={buttonVariant}
          >
            Contact us
          </motion.button>
          <motion.button
            className="border border-[#1090CB] text-[#1090CB] px-6 py-3 rounded-md text-sm sm:text-base bg-white shadow-sm hover:bg-[#f0f9ff] transition"
            variants={buttonVariant}
          >
            View more
          </motion.button>
        </motion.div>
      </motion.div>


      <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
        <motion.img
          src={elipse1}
          alt="Ellipse1"
          className="absolute top-0 md:top-10 left-1/2 md:left-1/3 transform -translate-x-1/4 md:-translate-x-0 w-64 sm:w-80 md:w-96 lg:w-[28rem] z-0 opacity-100"
          {...floatAnimation}
        />

        <motion.img
          src={bgimg}
          alt="Hero Illustration"
          className="relative w-72 sm:w-80 md:w-96 lg:w-[38rem] z-10 cursor-pointer"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 12, duration: 1.2 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
        />

      </div>
    </section>
  );
};

export default HeroSection;
