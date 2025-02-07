"use client";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="border-gray-700 bg-white dark:border-gray-700 relative w-full z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-blue-900">
            Hekto
          </span>
        </a>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Main Navigation and Dropdown Section */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} absolute top-16 left-0 right-0 bg-white md:flex md:items-center md:justify-between md:w-auto md:relative md:bg-transparent md:top-0 w-full md:w-auto px-4 md:px-0`}
          id="navbar-dropdown"
        >
          {/* Navigation Links */}
          <ul className="flex flex-col md:flex-row font-medium space-y-4 md:space-y-0 md:space-x-8 md:mr-16 text-center md:text-left">
            <li>
              <a href="http://localhost:3000/" className="block text-blue-900 hover:text-pink-600">Home</a>
            </li>
            <li className="relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center justify-between w-full md:w-auto text-blue-900 hover:text-pink-500">
                Pages
                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-44 bg-white rounded-lg shadow-md dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li><a href="/pages/about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">About</a></li>
                    <li><a href="/pages/contact" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Contact</a></li>
                    <li><a href="http://localhost:3000/pages/shoplist" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Shop</a></li>
                    <li><a href="http://localhost:3000/pages/shopgriddefault" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Product</a></li>
                    <li><a href="/pages/FAQ's" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">FAQ's</a></li>
                  </ul>
                </div>
              )}
            </li>
            <li><a href="http://localhost:3000/pages/shopgriddefault" className="block text-blue-900 hover:text-pink-500">Products</a></li>
            <li><a href="http://localhost:3000/pages/blog" className="block text-blue-900 hover:text-pink-500">Blog</a></li>
            <li><a href="http://localhost:3000/pages/shoplist" className="block text-blue-900 hover:text-pink-500">Shop</a></li>
            <li><a href="/pages/contact" className="block text-blue-900 hover:text-pink-500">Contact</a></li>
          </ul>

          {/* Search Section */}
          <div className="flex items-center mt-4 md:mt-0 md:ml-8 w-full md:w-auto">
            <div className="flex items-center border-2 border-gray-300 overflow-hidden w-full md:w-auto">
              <input className="p-2 px-6 text-sm text-gray-700 outline-none w-full md:w-auto" type="text" placeholder="Search..." />
              <button className="p-2 bg-pink-500 text-white hover:bg-pink-600">
                <BsSearch className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
