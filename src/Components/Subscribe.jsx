import React from "react";
import "../App.css";
import star from "../assets/star 1.png";
import pai from "../assets/pai chart 1.png";

const Subscribe = () => (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f3f6fd] to-[#eaf6fb] px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-24 text-center max-w-screen-full mx-auto">

        {/* Decorative Images */}
        <img
            src={star}
            alt="Star"
            className="absolute top-4 left-16 sm:left-32 md:left-48 lg:left-64 w-12 sm:w-16 md:w-20 h-auto"
        />

        <img
            src={pai}
            alt="Pie Chart"
            className="absolute top-8 right-16 sm:right-32 md:right-48 lg:right-64 w-10 sm:w-12 md:w-16 h-auto"
        />

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black leading-snug">
            Lorem Ipsum is simply dummy <br />
            text of the printing.
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-12 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Subscribe to our newsletter to get the latest updates, news, and exclusive offers directly to your inbox.
        </p>

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
