import React from "react";
import Frame26 from "../assets/Frame 26.png";

const squares = [
    {
        id: 1,
        title: "Lorem Ipsum is simply \n dummy text.",
        description:
            "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.",
        buttonText: "View More",
        bgColor: "bg-gray-200",
        textColor: "text-gray-800",
        buttonClass: "bg-[#1090CB] text-white hover:bg-sky-700",
    },
    {
        id: 2,
        title: "Lorem Ipsum is simply \n dummy text.",
        description:
            "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.",
        buttonText: "View More",
        bgColor: "bg-[#1090CB]",
        textColor: "text-white",
        buttonClass: "bg-white text-[#1090CB] hover:bg-[#f0f9ff]",
    },
];

const MoreDetails = () => (
    <section
        id="blog"
        className="w-full flex flex-col md:flex-row px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-12 mt-4 md:mt-8 max-w-screen-2xl mx-auto justify-center items-center gap-6"
    >


        {squares.map((square) => (
            <div
                key={square.id}
                className={`${square.bgColor} rounded-xl shadow-md flex flex-col items-center text-center w-full md:w-1/2 max-w-[572px] min-h-[400px] p-6`}


            >
                <h2 className={`${square.textColor} text-2xl sm:text-3xl font-bold mt-10 mb-4 whitespace-pre-line`}>
                    {square.title}
                </h2>

                <p className={`${square.textColor} text-sm sm:text-base md:text-base mb-6 leading-relaxed`}>
                    {square.description}
                </p>
                <div className="flex gap-4">
                    <button
                        className={`${square.buttonClass} px-4 py-2 rounded-lg text-base sm:text-lg hover:bg-[#0d7fb0] hover:scale-105 hover:shadow-lg 
  active:scale-95 active:bg-[#0c6e96] 
  focus:ring-2 focus:ring-sky-300 
  "`}
                    >
                        {square.buttonText}
                    </button>
                </div>
            </div>
        ))}
    </section>
);

export default MoreDetails;
