import React from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";

const features = [
    { icon: <img src={image1} alt="image 1" className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto mx-auto" /> },
    { icon: <img src={image2} alt="image 2" className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto mx-auto" /> },
    { icon: <img src={image3} alt="image 3" className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto mx-auto" /> },
    { icon: <img src={image4} alt="image 4" className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto mx-auto" /> },
];

const Sponsors = () => (
    <div className="w-full flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-12 max-w-screen-2xl mx-auto">

        {/* Heading */}
        <p className="text-gray-900 max-w-2xl mx-auto mb-8 text-lg sm:text-xl md:text-2xl font-semibold">
            You will be in good Company
        </p>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full">
            {features.map((f, i) => (
                <div key={i} className="flex flex-col items-center p-4 sm:p-6">
                    {f.icon}
                </div>
            ))}
        </div>
    </div>
);

export default Sponsors;
