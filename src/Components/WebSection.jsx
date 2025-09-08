import React from "react";
import "../App.css";
import Group27 from "../assets/Group 27.png";

const WebSection = () => (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-16 lg:px-24 py-12">

        {/* Left Image */}
        <div className="flex-1 mt-8 md:mt-0 flex justify-center md:justify-end w-full">
            <img
                src={Group27}
                alt="Mobile Illustration"
                className="w-220 h-auto"
            />
        </div>

        {/* Right Content */}
        <div className="flex-1 max-w-[516px] justify-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-[#1090CB]">Lorem Ipsum</span> <br />
                is simply dummy text of the printing.
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
                applications and website builders with dozens of completed projects.
                We build and develop mobile applications for several top platforms,
                including Android & iOS.
            </p>
        </div>



    </section>
);

export default WebSection;
