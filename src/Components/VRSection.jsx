import React from "react";
import "../App.css";
import Group29 from "../assets/Group 29.png";

const VRSection = () => (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-white px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-12 max-w-screen-2xl mx-auto">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
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
                src={Group29}
                alt="Mobile Illustration"
                className="w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] 2xl:w-[36rem] h-auto"
            />
        </div>

    </section>
);

export default VRSection;
