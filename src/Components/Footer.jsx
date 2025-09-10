import React from "react";

export default function Footer() {
    return (
        <footer className="w-full px-6 sm:px-10 md:px-16 lg:px-24 bg-white">
            {/* Content container */}
            <div className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo & Description */}
                <div className="text-center md:text-left">
                    <h2 className="text-sky-700 font-bold text-lg mb-3">LOGO</h2>
                    <p className="text-sm mb-4 text-gray-600 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className="text-sm text-gray-500">@Lorem</p>
                </div>

                {/* About Us Links */}
                <div className="text-center md:text-left">
                    <h3 className="text-gray-900 font-semibold text-lg mb-3">About us</h3>
                    <ul className="space-y-3 text-sm flex flex-col items-center md:items-start">
                        <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Lorem</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Portfolio</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Contact us</a></li>
                    </ul>
                </div>

                {/* Contact & Social Icons */}
                <div className="text-center md:text-left">
                    <h3 className="text-gray-900 font-semibold text-lg mb-3">Contact us</h3>
                    <p className="text-sm mb-3 text-gray-600 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className="text-sm font-medium mb-4 text-gray-700">+908 89097 890</p>

                    <div className="flex space-x-4 justify-center md:justify-start">
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 bg-gray-50"
                        >
                            <i className="fab fa-facebook-f text-gray-700 text-lg"></i>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 bg-gray-50"
                        >
                            <i className="fab fa-instagram text-gray-700 text-lg"></i>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 bg-gray-50"
                        >
                            <i className="fab fa-twitter text-gray-700 text-lg"></i>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 bg-gray-50"
                        >
                            <i className="fab fa-linkedin-in text-gray-700 text-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}