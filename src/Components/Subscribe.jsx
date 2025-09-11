import React, { useState } from "react";
import "../App.css";
import star from "../assets/star 1.png";
import pai from "../assets/pai chart 1.png";

const Subscribe = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // adjust tilt strength
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setOffset({ x, y });
    };

    const handleMouseLeave = () => {
        setOffset({ x: 0, y: 0 });
    };

    return (
        <section
            id="contact"
            className="relative w-full flex flex-col items-center justify-center bg-[#1090CB1A] px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 text-center max-w-8xls mx-auto"
        >
            {/* Decorative Images */}
            <img
                src={star}
                alt="Star"
                className="absolute top-0 left-10 sm:left-20 md:left-32 lg:left-48 w-10 sm:w-14 md:w-16 h-auto animate-bounce-slow"
            />

            <img
                src={pai}
                alt="Pie Chart"
                className="absolute top-6 right-10 sm:right-20 md:right-32 lg:right-48 w-8 sm:w-12 md:w-14 h-auto animate-spin-slow"
            />

            {/* Interactive Heading */}
            <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black leading-snug text-interactive"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `rotateX(${-offset.y}deg) rotateY(${offset.x}deg)`,
                    transition: "transform 0.2s ease",
                }}
            >
                Lorem Ipsum is simply dummy <br /> text of the printing.
            </h2>

            {/* Subscription Form */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                {/* Email Input */}
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white flex-1 px-5 py-3 rounded-lg border-1  border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#555656] focus:border-[#1090CB] placeholder-gray-400 shadow-sm transition-all duration-300 hover:shadow-md"
                />

                {/* Subscribe Button */}
                <button
                    className="bg-[#000000] text-white px-6 py-3 rounded-lg hover:bg-[#343434] hover:scale-105 active:scale-95 transition-transform duration-300 text-base sm:text-lg font-semibold shadow-md hover:shadow-lg"
                >
                    Subscribe
                </button>
            </div>

        </section>
    );
};

export default Subscribe;
