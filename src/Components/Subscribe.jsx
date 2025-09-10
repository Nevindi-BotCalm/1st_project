import React from "react";
import "../App.css";
import star from "../assets/star 1.png";
import pai from "../assets/pai chart 1.png";

const Subscribe = () => (
    <section id="contact" className="relative w-full flex flex-col items-center justify-center bg-[#1090CB1A] px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 text-center max-w-8xls mx-auto">
        {/* Decorative Images */}
        <img
            src={star}
            alt="Star"
            className="absolute top-4 left-10 sm:left-20 md:left-32 lg:left-48 w-10 sm:w-14 md:w-16 h-auto"
        />

        <img
            src={pai}
            alt="Pie Chart"
            className="absolute top-6 right-10 sm:right-20 md:right-32 lg:right-48 w-8 sm:w-12 md:w-14 h-auto"
        />

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black leading-snug">
            Lorem Ipsum is simply dummy <br />
            text of the printing.
        </h2>

      
        {/* Subscription Form */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
            <input
                type="email"
                placeholder="Enter your email"
                className="bg-white flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#000000]"
            />
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition text-base sm:text-lg">
                Subscribe
            </button>
        </div>
    </section>
);

export default Subscribe;
