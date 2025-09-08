import React from "react";
import asset23 from "../assets/Group 23.png";
import asset24 from "../assets/Group 24.png";
import asset25 from "../assets/Group 25.png";
import asset26 from "../assets/Group 26.png";

const features = [
    { icon: asset23, alt: "Feature 1", bgColor: "#EFEAFF", text: "Web Application", description: "Lorem Ipsum is simply" },
    { icon: asset24, alt: "Feature 2", bgColor: "#ECFFDA", text: "SEO", description: "Sed ut perspiciatis" },
    { icon: asset25, alt: "Feature 3", bgColor: "#DAE6FF", text: "AR/VR Solutions", description: "At vero eos et accusamus" },
    { icon: asset26, alt: "Feature 4", bgColor: "#FFE5DA", text: "Mobile Applications", description: "Nemo enim ipsam" },
];

const FeaturesSection = () => (
    <div className="w-full flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-12 max-w-screen-2xl mx-auto">

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mb-12">
            {features.map((f, i) => (
                <div key={i} className="flex items-center p-4 text-left ">
                    <div
                        className="w-20 h-20 rounded-3xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: f.bgColor }}
                    >
                        <img src={f.icon} alt={f.alt} className="w-10 h-auto" />
                    </div>
                    <div className="ml-4">
                        <p className="text-black font-bold text-base sm:text-lg mb-1">{f.text}</p>
                        <p className="text-gray-600 text-sm sm:text-base">{f.description}</p>
                    </div>
                </div>
            ))}
        </div>


        <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 text-black">
            Lorem Ipsum is simply dummy text of the printing.
        </p>


        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
    </div>
);

export default FeaturesSection;
