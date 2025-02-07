"use client"
import { useState } from "react";
import Footer from "@/app/component/footer/page";
import Navbar from "@/app/component/navbar/page";
export default function About() {

  const testimonials = [
    {
      id: 1,
      name: "mark",
      role: "CEO, Example Company",
      feedback:
        "Amazing customer service and top-quality products. My order arrived on time and was exactly what I expected!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3iCboKnT-YUYXRVyj4owpKoPazvoce-Faw&s",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Marketing Manager",
      feedback:
        "I love the variety of products and the fast service. Highly recommend this site for anyone looking for quality items!",
      image: "https://cdn0.iconfinder.com/data/icons/activities-flat-colorful/2048/2145_-_Holding_flowers-512.png",
    },
    {
      id: 3,
      name: "lilac",
      role: "Product Designer",
      feedback:
        "Great experience! Fast delivery, excellent product quality, and easy navigation. Will definitely shop again!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNY5eL7S1fg_aTOmkLRDE02WfelroIWNhEfA&s",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8"> <Navbar/>
    <section className="bg-purple-100 py-8 relative"> <h1 className="text-blue-900 text-4xl mt-8 font-bold ml-24">About Us</h1>
      <div className="ml-24 mt-4">
        <a href="/" className="font-semibold text-gray-600 hover:text-pink-600 ">Home .</a>
          <a href="/" className="font-semibold text-gray-600 hover:text-pink-600 ">Pages .</a>

        <a href="/pages/about" className="font-semibold text-pink-600">About Us</a>
      </div>
      </section> 

      <div className="flex flex-col lg:flex-row items-center mt-16">
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/image/Group 73.png"
            alt="people"
            className="h-[300px] w-[450px]"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 lg:pl-8">
          <h2 className="text-3xl font-bold text-blue-900">
            Know About Our Ecommerce <br /> Business, History
          </h2>
          <p className="mt-4 text-gray-700">
            Our website offers a wide range of high-quality products, allowing you
            to shop according to your needs. Our team carefully selects each
            product to ensure that you receive the best quality and value.
          </p>
          <a
            href="http://localhost:3000/pages/contact"
            className="bg-pink-600 px-6 py-2 text-white mt-6 inline-block rounded-lg hover:bg-pink-700"
          >
            Contact Now
          </a>
        </div>
      </div>

      <div className="bg-gray-50 py-16 mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-truck"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Free Delivery</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-undo-alt"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">100% Cash Back</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-green-500 text-4xl mb-4">
              <i className="fas fa-medal"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Quality Product</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-headset"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Client Say!
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            {testimonials.map((testimonial, index) => (
              <img
                key={testimonial.id}
                src={testimonial.image}
                alt={testimonial.name}
                className={`h-16 w-16 rounded-full mx-2 cursor-pointer border-2 transition-all duration-300 ${
                  activeTestimonial === index
                    ? "border-pink-600 scale-110"
                    : "border-gray-300"
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
          <p className="text-gray-600 italic mb-4">
            "{testimonials[activeTestimonial].feedback}"
          </p>
          <h3 className="text-lg font-bold text-gray-800">
            {testimonials[activeTestimonial].name}
          </h3>
          <p className="text-sm text-gray-500">
            {testimonials[activeTestimonial].role}
          </p>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-8 mx-1 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? "bg-pink-600"
                    : "bg-gray-300"
                }`}
                onClick={() => setActiveTestimonial(index)}
              ></button>
            ))}
          
          </div>
        </div>
    <div className="mt-8"> <Footer/> </div>  </div>
    </div>
  );
}
