import React from "react";
import asset23 from "../assets/Group 23.png";
import asset24 from "../assets/Group 24.png";
import asset25 from "../assets/Group 25.png";
import asset26 from "../assets/Group 26.png";

const features = [
    { icon: asset23, alt: "Feature 1", bgColor: "#EFEAFF", text: "Web Application", description: "Lorem Ipsum is simply" },
    { icon: asset24, alt: "Feature 2", bgColor: "#ECFFDA", text: "SEO", description: "Lorem Ipsum is simply" },
    { icon: asset25, alt: "Feature 3", bgColor: "#DAE6FF", text: "AR/VR Solutions", description: "Lorem Ipsum is simply" },
    { icon: asset26, alt: "Feature 4", bgColor: "#FFE5DA", text: "Mobile Applications", description: "Lorem Ipsum is simply" },
];

const FeaturesSection = () => (

    <section
        id="about"
        className="w-full flex flex-col items-center justify-left text-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-12 max-w-screen-8xl container mx-auto "
    >
        {/* Features Grid */}
        <div className="grid w-full mb-12 justify-left grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-left">
            {features.map((f, i) => (
                <div
                    key={i}
                    className="flex items-center p-4 text-left bg-white w-full max-w-[300px]"
                >
                    <div
                        className="w-20 h-20 rounded-3xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: f.bgColor }}
                    >
                        <img src={f.icon} alt={f.alt} className="w-10 h-auto" />
                    </div>
                    <div className="ml-4">
                        <p className="text-black font-bold text-base sm:text-lg mb-1">
                            {f.text}
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base">
                            {f.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <hr className="border-t border-gray-300 mt-auto  my-8 w-screen -mx-6 sm:-mx-10 md:-mx-16 lg:-mx-24 xl:-mx-32 2xl:-mx-40" />

        <p className="text-[18px] sm:text-[20px] md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug sm:leading-snug md:leading-tight lg:leading-tight mb-4 sm:mb-5 md:mb-6 ">
            Lorem Ipsum is simply dummy text of the printing.
        </p>



        <p className="text-gray-600   max-w-2xl mx-auto mb-8 text-sm sm:text-center md:text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
            Lorem Ipsum has been the industry's
        </p>
    </section>
);

export default FeaturesSection;
