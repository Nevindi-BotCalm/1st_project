import React from "react";
import Group30 from "../assets/Group 30.png";

const MoreDetails = () => (
    <section className="w-full flex flex-col md:flex-row gap-6 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-12 max-w-screen-2xl mx-auto justify-center items-start">

        {/* First Square */}
        <div className="bg-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center text-center w-full md:w-1/2 relative">
            <h2 className="text-2xl sm:text-3xl font-bold mt-16 mb-4">
                Lorem Ipsum is simply <br /> dummy text.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-base mb-6 leading-relaxed">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.
            </p>
            <div className="flex gap-4">
                <button className="bg-[#1090CB] text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition text-base sm:text-lg">
                    View More
                </button>
            </div>
        </div>

        {/* Second Square */}
        <div className="bg-[#1090CB] rounded-xl shadow-md p-6 flex flex-col items-center text-center w-full md:w-1/2 relative">

            {/* Bell Icon
            <img
                src={Group30}
                alt="Bell Icon"
                className="absolute w-24 sm:w-28 md:w-32 h-auto top-[-40px] sm:top-[-50px] md:top-[-60px] opacity-100"
            /> */}

            <h2 className="text-white text-2xl sm:text-3xl font-bold mt-16 mb-4">
                Lorem Ipsum is simply <br /> dummy text.
            </h2>
            <p className="text-white text-sm sm:text-base md:text-base mb-6 leading-relaxed">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.
            </p>
            <div className="flex gap-4">
                <button className="bg-white border-[#ffffff] text-[#1090CB] px-4 py-2 rounded-lg hover:bg-[#f0f9ff] transition text-base sm:text-lg">
                    View More
                </button>
            </div>
        </div>

    </section>
);

export default MoreDetails;
