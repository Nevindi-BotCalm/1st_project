import React from "react";
import "../App.css";
import Mobile from "../assets/Mobile.png";

const MobileSection = () => (
    <section className="relative w-full flex flex-col-reverse md:flex-row items-center justify-between bg-white px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-12 max-w-screen-2xl mx-auto">

        {/* Left Text */}
        <div className="flex-1 max-w-xl text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-[#1090CB]">Lorem Ipsum</span> <br />
                is simply dummy text of the printing.
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8 leading-relaxed">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
                applications and website builders with dozens of completed projects.
                We build and develop mobile applications for several top platforms,
                including Android & iOS.
            </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end w-full">
            <img
                src={Mobile}
                alt="Mobile Illustration"
                className="w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] 2xl:w-[36rem] h-auto"
            />
        </div>
    </section>
);

export default MobileSection;
