components/Hero.js

export default function Hero() {
    return (
     <div>   

      <section className="bg-purple-100 py-16">
        <div className="container mx-auto flex items-center justify-between">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-blue-900">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="text-gray-700 my-4">
              Explore the latest furniture trends with exceptional quality.
            </p>
            <button className="bg-pink-600 text-white py-2 px-6 rounded hover:bg-pink-700">
              Shop Now
            </button>
          </div>
          <img
            src="/image/Chair (34).png"
            alt="Chair"
            className="w-1/2"
          />
        </div>
      </section>
  </div>  );
  }
  