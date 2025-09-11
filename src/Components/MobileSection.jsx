
import React from "react";
import Mobile from "../assets/Mobile.png";
import happy from "../assets/happy 1.png";

const MobileSection = () => {
    return (
        <section
            id="services"
            className="w-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-8 md:py-12 max-w-screen-2xl mx-auto gap-10 mt-[-200px] sm:-mt-10  md:-mt-24 lg:-mt-32 xl:-mt-40"
        >

            {/* Text Content */}

            <div className="flex-1">

                <div className="flex gap-[25px] mt-[160px]">
                    <div className="max-w-[60px] bg-[#08D3BB] rounded-full p-[16px] ">
                        <img src={happy} alt="image" className="w-[26px] h-[26px]   " />
                    </div>
                    <div className="max-w-[308px] h-[55px]">
                        <h1 className="font-medium sm:text-[17px] text-[14px] leading-[175%] ">
                            Lorem ipsum is simply dummy text
                        </h1>


                        <p className="font-normal text-[#868686]  sm:text-[14px] text-[11px] leading-[175%]">
                            Lorem ipsum is simply dummy text
                        </p>
                    </div>
                </div>



                <h1 className="text-3xl sm:text-4xl sm:text-left text-center  my-10 md:text-6xl font-bold text-gray-900 ">
                    <span className="text-[#1090CB]">Lorem Ipsum</span> is simply dummy text of the printing.
                </h1>
                <p className="mt-6 sm:mt-8 text-gray-500 text-base sm:text-lg sm:text-left text-center font-medium max-w-lg mx-auto md:mx-0">
                    KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
                    applications and website builders with dozens of completed projects. We
                    build and develop mobile applications for several top platforms,
                    including Android & iOS.
                </p>
            </div>

            {/* Image */}
<div className="flex-1 flex justify-center md:justify-end items-center mt-8 md:mt-0 relative">
  <img
    src={Mobile}
    alt="Mobile Illustration"
    className="w-full max-w-[500px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] h-auto relative z-10"
  />

  {/* Responsive right-side gradient */}
  {/* <div
    className="absolute top-1/2 md:right-[-100px] lg:right-[-10px] xl:right-[-200px] 2xl:right-[-250px]
      w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96 z-20 pointer-events-none
      rounded-full blur-2xl opacity-50
      bg-[radial-gradient(circle_at_left_center,_#DED9FF_60%,_rgba(255,255,255,0)_60%)]
      -translate-y-1/2"
  ></div> */}
</div>
        </section>
    );
};

export default MobileSection;