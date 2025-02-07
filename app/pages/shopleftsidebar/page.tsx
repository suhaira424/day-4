"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/app/component/footer/page';
import Navbar from '@/app/component/navbar/page';

// Dummy products data
const dummyProducts = [
  {
    id: 1,
    name: 'Dictum Morbi',
    price: 50,
    discount: 20, // percentage discount
    rating: 4,
    color: 'red',
    category: 'Electronics',
    image: '/image/product1.jpg',
  },
  {
    id: 2,
    name: 'Sapien Risus',
    price: 70,
    discount: 0,
    rating: 5,
    color: 'blue',
    category: 'Fashion',
    image: '/image/product2.jpg',
  },
  {
    id: 3,
    name: 'Aenean Gravida',
    price: 40,
    discount: 10,
    rating: 3,
    color: 'green',
    category: 'Furniture',
    image: '/image/product3.jpg',
  },
  {
    id: 4,
    name: 'Curabitur Vel',
    price: 90,
    discount: 30,
    rating: 4,
    color: 'red',
    category: 'Electronics',
    image: '/image/product4.jpg',
  },
  {
    id: 5,
    name: 'Nulla at Imperdiet',
    price: 120,
    discount: 15,
    rating: 5,
    color: 'black',
    category: 'Fashion',
    image: '/image/product5.jpg',
  },
  {
    id: 6,
    name: 'Pellentesque',
    price: 60,
    discount: 0,
    rating: 2,
    color: 'blue',
    category: 'Furniture',
    image: '/image/product6.jpg',
  },
  // Add more products as needed...
];

export default function ShopLeftSidebar() {
  // State for filters and view options
  const [products, setProducts] = useState(dummyProducts);
  const [filters, setFilters] = useState({
    priceMin: 0,
    priceMax: 150,
    discount: 0,
    rating: 0,
    category: '',
    color: '',
  });
  const [perPage, setPerPage] = useState(6);
  const [sortBy, setSortBy] = useState('');
  const [view, setView] = useState('grid');

  // Update products based on filters, sorting, and perPage controls
  useEffect(() => {
    let filtered = dummyProducts.filter((p) => {
      return (
        p.price >= filters.priceMin &&
        p.price <= filters.priceMax &&
        p.discount >= filters.discount &&
        p.rating >= filters.rating &&
        (filters.category === '' || p.category === filters.category) &&
        (filters.color === '' || p.color === filters.color)
      );
    });

    // Apply sorting
    if (sortBy === 'priceLowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHighToLow') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    // Limit the number of products based on perPage value
    setProducts(filtered.slice(0, perPage));
  }, [filters, perPage, sortBy]);

  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold">Shop Left Sidebar</h1>
        <p className="text-gray-500">Home &gt; Pages &gt; Shop Left Sidebar</p>

        <div className="flex flex-col md:flex-row mt-8 gap-6">
          {/* Sidebar Filters */}
          <aside className="md:w-1/4 bg-white p-4 rounded shadow space-y-6">
            {/* Price Filter */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Price Range</h2>
              <div className="flex space-x-2 items-center">
                <input
                  type="number"
                  value={filters.priceMin}
                  onChange={(e) =>
                    setFilters({ ...filters, priceMin: Number(e.target.value) })
                  }
                  className="border rounded p-1 w-16"
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  value={filters.priceMax}
                  onChange={(e) =>
                    setFilters({ ...filters, priceMax: Number(e.target.value) })
                  }
                  className="border rounded p-1 w-16"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Discount Filter */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Discount</h2>
              <select
                value={filters.discount}
                onChange={(e) =>
                  setFilters({ ...filters, discount: Number(e.target.value) })
                }
                className="border rounded p-1 w-full"
              >
                <option value={0}>All</option>
                <option value={10}>10% or more</option>
                <option value={20}>20% or more</option>
                <option value={30}>30% or more</option>
              </select>
            </div>

            {/* Rating Filter */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Rating</h2>
              <select
                value={filters.rating}
                onChange={(e) =>
                  setFilters({ ...filters, rating: Number(e.target.value) })
                }
                className="border rounded p-1 w-full"
              >
                <option value={0}>All Ratings</option>
                <option value={1}>1 Star & up</option>
                <option value={2}>2 Stars & up</option>
                <option value={3}>3 Stars & up</option>
                <option value={4}>4 Stars & up</option>
                <option value={5}>5 Stars</option>
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Category</h2>
              <select
                value={filters.category}
                onChange={(e) =>
                  setFilters({ ...filters, category: e.target.value })
                }
                className="border rounded p-1 w-full"
              >
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Furniture">Furniture</option>
              </select>
            </div>

            {/* Color Filter */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Color</h2>
              <select
                value={filters.color}
                onChange={(e) =>
                  setFilters({ ...filters, color: e.target.value })
                }
                className="border rounded p-1 w-full"
              >
                <option value="">All Colors</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="black">Black</option>
              </select>
            </div>
          </aside>

          {/* Products & Top Controls */}
          <section className="md:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <div className="mb-2 sm:mb-0">
                <span className="text-gray-600">
                  Ecommerce Accessories &amp; Fashion Items
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div>
                  <label className="mr-2">Per Page:</label>
                  <select
                    value={perPage}
                    onChange={(e) => setPerPage(Number(e.target.value))}
                    className="border rounded p-1"
                  >
                    <option value={6}>6</option>
                    <option value={12}>12</option>
                    <option value={18}>18</option>
                  </select>
                </div>
                <div>
                  <label className="mr-2">Sort By:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded p-1"
                  >
                    <option value="">Default</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
                <div>
                  <label className="mr-2">View:</label>
                  <select
                    value={view}
                    onChange={(e) => setView(e.target.value)}
                    className="border rounded p-1"
                  >
                    <option value="grid">Grid</option>
                    <option value="list">List</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Listing */}
            <div
              className={
                view === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded shadow flex flex-col"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div className="mt-4 flex-1">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-gray-600">
                      ${product.price}{' '}
                      {product.discount > 0 && (
                        <span className="line-through text-red-500 ml-2">
                          ${ (product.price * (1 + product.discount / 100)).toFixed(2) }
                        </span>
                      )}
                    </p>
                    <p className="text-yellow-500">
                      {'★'.repeat(product.rating)}
                      {'☆'.repeat(5 - product.rating)}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <button className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
