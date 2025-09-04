import React from "react";

export default function Footer() {
    return (
        <footer className="bg-white w-full">
            <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Logo & Description */}
                <div>
                    <h2 className="text-sky-700 font-bold text-lg mb-3">LOGO</h2>
                    <p className="text-sm mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className="text-sm text-gray-500">@Lorem</p>
                </div>

                {/* About Us Links */}
                <div>
                    <h3 className="text-gray-900 font-semibold text-lg mb-3">About us</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-600 transition">Lorem</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition">Portfolio</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition">Contact us</a></li>
                    </ul>
                </div>

                {/* Contact & Social Icons */}
                <div>
                    <h3 className="text-gray-900 font-semibold text-lg mb-3">Contact us</h3>
                    <p className="text-sm mb-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className="text-sm font-medium mb-4">+908 89097 890</p>

                    <div className="flex space-x-4">
                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full shadow hover:bg-gray-100 transition">
                            <i className="fab fa-facebook-f text-gray-700"></i>
                        </a>
                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full shadow hover:bg-gray-100 transition">
                            <i className="fab fa-instagram text-gray-700"></i>
                        </a>
                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full shadow hover:bg-gray-100 transition">
                            <i className="fab fa-twitter text-gray-700"></i>
                        </a>
                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full shadow hover:bg-gray-100 transition">
                            <i className="fab fa-linkedin-in text-gray-700"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t text-center py-4 text-sm text-gray-500">
                © 2021 Lorem. All rights reserved.
            </div>
        </footer>
    );
}
