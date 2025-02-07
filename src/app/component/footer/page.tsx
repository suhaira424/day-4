"use client";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Signed up with email:", email);
      setEmail(""); // Clear the input field after sign up
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-purple-100">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a href="/" aria-label="Go home" title="Hekto" className="inline-flex items-center">
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Hekto</span>
          </a>
          {/* Email Sign-Up Section */}
          <div className="flex flex-col items-start mt-8">
            <form onSubmit={handleSignUp} className="flex items-center space-x-4 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-purple-accent-400 flex-grow sm:w-64"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 text-white bg-pink-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-auto"
              >
                SignUp
              </button>
            </form>
      {/* contact info */}
      <h1 className="text-sm mt-4 text-gray-600">Contact Info</h1>
     <p className="text-sm text-gray-600">17 Princess Road,London,Greater London NW1 8JR,UK</p>
    </div>
        </div>

        {/* Categories, Business, etc. */}
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 sm:grid-cols-2">
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Categories</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Laptops & Computers</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Cameras & Photography</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Smart Phones & Tablets</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Video Games & Consoles</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Waterproof Headphones</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Customer Care</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="http://localhost:3000/pages/login?email=&password=" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">My Account</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Discount</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Returns</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Order Tracking</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Order History</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Pages</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Blog</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Browse the Shop</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Category</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Pre Built Pages</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Visual Composer Elements</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">WooCommerce Pages</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 sm:space-x-6 mt-4 sm:mt-0 ml-0">
          <a href="/" aria-label="Twitter" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
            </svg>
          </a>
          <a href="/" aria-label="Facebook" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4"></circle>
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10 C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
            </svg>
          </a>
          <a href="/" aria-label="Instagram" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
