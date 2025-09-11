import React from "react";
import "../App.css";
import Group27 from "../assets/Group 27.png";
import happy from "../assets/happy 1.png";

const WebSection = () => (
    <section

        className="w-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-8 md:py-12 max-w-screen-2xl mx-auto gap-10 -mt-[150px] sm:-mt-12 md:-mt-24 lg:-mt-32 xl:-mt-10"
    >

        <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-10">

            <img
                src={Group27}
                alt="Group"
                className="w-full max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain sm:mt-[100px] order-2 lg:order-1"
            />

            <div className="flex-1 text-center md:text-left order-1 lg:order-2">

                <div className="flex sm:gap-[25px] gap-[10px] mt-[160px] text-left justify-center lg:justify-start">

                    <div className="max-w-[60px] bg-[#1090CB] rounded-full p-[16px] ">
                        <img src={happy} alt="image" className="w-[26px] h-[26px]   " />
                    </div>


                    <div className="max-w-[308px] h-[55px]">
                        <h1 className="font-medium sm:text-[17px] text-[14px] leading-[175%]  ">
                            Lorem ipsum is simply dummy text
                        </h1>
                        <p className="font-normal text-[#868686]  sm:text-[14px] text-[11px] leading-[175%]">
                            Lorem ipsum is simply dummy text
                        </p>
                    </div>


                </div>

                {/* Main heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-10 sm:mt-12">
                    <span className="text-[#1090CB]">Lorem Ipsum</span> is simply dummy text of the printing.
                </h1>

                {/* Paragraph */}
                <p className="mt-6 sm:mt-8 text-gray-500 text-base sm:text-lg md:text-xl font-medium max-w-lg mx-auto md:mx-0">
                    KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
                    applications and website builders with dozens of completed projects. We
                    build and develop mobile applications for several top platforms,
                    including Android & iOS.
                </p>
            </div>
        </div>
    </section>
);

export default WebSection;
