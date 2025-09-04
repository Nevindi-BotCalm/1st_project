import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <nav className="w-full max-w-screen-2xl mx-auto flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-sky-600">LOGO</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-semibold">
          <a href="#home" className="text-[#1090CB] hover:text-sky-700 transition">
            Home
          </a>
          <a href="#about" className="hover:text-sky-700 transition">About us</a>
          <a href="#services" className="hover:text-sky-700 transition">Services</a>
          <a href="#blog" className="hover:text-sky-700 transition">Blog</a>
          <button className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-sky-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>


      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-6 bg-white shadow-md font-semibold max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
          <a
            href="#home"
            className="text-[#1090CB] hover:text-sky-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a href="#about" className="hover:text-sky-700 transition" onClick={() => setIsOpen(false)}>
            About us
          </a>
          <a href="#services" className="hover:text-sky-700 transition" onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="#blog" className="hover:text-sky-700 transition" onClick={() => setIsOpen(false)}>
            Blog
          </a>
          <button
            className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
