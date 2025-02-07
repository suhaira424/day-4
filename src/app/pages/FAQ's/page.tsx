"use client"
import React from "react";
import { useState } from "react";
import Navbar from "@/app/component/navbar/page";
import Footer from "@/app/component/footer/page";
import Header from "@/app/component/header/page";

const FAQ = () => {
  const [formData, setFormData] = useState({ name: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Question submitted!\nName: ${formData.name}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
    <Header/>
      <Navbar />
      {/* FAQ Section */}
      <section className="bg-purple-100 py-10 text-center md:text-left">
        <h1 className="text-4xl font-bold mx-6 md:ml-24">FAQ</h1>
        <div className="mx-6 md:ml-24">
          <a href="">Home .</a> Pages . <a className="text-pink-600" href="">FAQ</a>
        </div>
      </section>

      <main className="container mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* General Information */}
          <div className="md:ml-32 mt-4">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">General Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-900">Eu dictumst cum at sed euismod condimentum?</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trincidunt sed tristique nulla vitae, consequat gravida sagittis.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">Magna bibendum ut fermentum eros.</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trincidunt sed tristique nulla vitae, consequat gravida sagittis.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">Odio muskana hak eris consectetur sceler?</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trincidunt sed tristique nulla vitae, consequat gravida sagittis.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">Elit id blandit sabora bai velit gua mora?</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trincidunt sed tristique nulla vitae, consequat gravida sagittis.</p>
              </div>
            </div>
          </div>
          {/* Ask a Question Form */}
          <div className="bg-purple-100 p-6 md:p-10 shadow-lg md:relative mx-auto md:mx-0 w-full md:w-[400px] max-w-md">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Ask a Question</h2>
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <input type="text" name="name" placeholder="Your Name*" onChange={handleChange} className="w-full p-2 border rounded" required />
              <input type="text" name="subject" placeholder="Subject*" onChange={handleChange} className="w-full p-2 border rounded" required />
              <textarea name="message" placeholder="Type Your Message*" onChange={handleChange} className="w-full p-2 border rounded" required></textarea>
              <button type="submit" className="bg-pink-600 text-white px-4 py-2 w-full md:w-32">Send Mail</button>
            </form>
          </div>
        </div>
      </main>
      <img className="w-full md:w-[1100px] mx-auto mt-12" src="/image/image 1174.png" alt="logos" />
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;