"use client";

import Footer from "@/app/component/footer/page";
import Header from "@/app/component/header/page";
import Navbar from "@/app/component/navbar/page";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div>
      <Header />
      <Navbar />
      
      {/* Page Title Section */}
      <section className="bg-purple-100 py-8 relative">
        <div className="container mx-auto px-4 text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Contact Us</h1>
          <div className="mt-2 flex flex-wrap gap-2 text-gray-700">
            <a className="font-bold" href="/">Home</a>
            <span>.</span>
            <a className="font-bold" href="#">Pages</a>
            <span>.</span>
            <a className="text-pink-600 font-bold" href="/pages/contact">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Information About Us</h2>
          <p className="text-gray-600">
            Learn more about our journey, values, and commitment to delivering
            exceptional products and services to our customers worldwide.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
            <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
            <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Contact Way</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <span className="w-6 h-6 bg-blue-500 rounded-full"></span>
              <span>📞 Tel: 877-67-88-99</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="w-6 h-6 bg-purple-500 rounded-full"></span>
              <span>📧 Email: shop@store.com</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="w-6 h-6 bg-pink-500 rounded-full"></span>
              <span>📍 20 Margaret St, London, Great Britain, 3NM98-LK</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="w-6 h-6 bg-green-500 rounded-full"></span>
              <span>✅ Free standard shipping on all orders.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Form and Image Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-blue-900">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
              />
              <textarea
                placeholder="Type Your Message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
              >
                Send Mail
              </button>
            </form>
          </div>
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/virtual-assistant-concept-illustration_114360-25576.jpg"
              alt="Customer Support"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
