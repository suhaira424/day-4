"use client";

import { useState } from "react";
import Navbar from "@/app/component/navbar/page";
import Header from "@/app/component/header/page";
import Footer from "@/app/component/footer/page";

export default function ShopList() {
  const [perPage, setPerPage] = useState(12);
  const [sortBy, setSortBy] = useState("");
  const [view, setView] = useState("grid");

  // Dummy Product Data (Replace with API data later)
  const products = [
    {
      id: 1,
      name: "Accumsan tincidunt",
      price: "$120",
      image: "https://s3-alpha-sig.figma.com/img/2c1d/b3b7/24a7cae44e8a12f53da7ba81086e5ae4?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ni9ZPruEbqnwWXbB6GTHAH8K13MTa9xgxARoZfgf2bdr2kDKZUcy~cRXJCYD~1Ut3pwdLN8tmhkIqz7JIlaYLhTllXX8fiJy4J0U478TR3RXig8O~mad5cpJR8ATyApSQvcsmH0HVD-uc0B-eNBPNPnQex7FD38722RKxfoGDe5gw9H6tx3jCB3I7Jb39zMKywmugpVTEkHwBLbXD34WJsHeTJGVUDwHiNrB80OaJpB7r2evcL56MdXeG-H25XWzmCLGXxvDce9rE6M3lKM05M8ilRAQOqnHAduvuuMxtbv4uLxM43kAj64hm0A1UWjpipvN3F5jXsKatBW6W12lQw__",
    },
    {
      id: 2,
      name: "In nulla",
      price: "$80",
      image: "https://s3-alpha-sig.figma.com/img/829e/9cbc/ec6b908d17b9bc22c55476246eae33e4?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qG4b4-Ze777ro9eJJvUYoRgxXwj-mQHxzMYbwkiyvhobuwLKFPm3GiwZlQYeXt5o82jYB10VpYR7IAznf1oJtsu-qunygQggHXKMUXr8kKRiqbUeADYNfbWKAKWWc1uBACt~w58RXKtNhtuDZ9qveAplDkARH1ISJOHJYHfPAwOGfIJeFGEf7riWeIQtLbVSeGUlMFNPIENRFhd8WgNreypJ8L~ogbB~8~Klr6ilxaq5fF3ZLxsr5dbPywJSkHFkiw2l166WiqXktB~tIw6uLhJOyokEVgpaM806rB2pEA0W4HVeHFlN-rGV3mUY8S0ybZrWp0f~rUKMOM9byq5Ulw__",
    },
    {
      id: 3,
      name: "Vel sem",
      price: "$150",
      image: "https://s3-alpha-sig.figma.com/img/8f60/18bd/250e29c6efcb1348348d95cb6fa468ad?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e58gCyNpdqWuXuITG40fwVKO8qFBCaCCLCYDt3eeGswlEdp9Y24QPvVbLgR44CSbHE0fCQV6KEOZIU3CFQiFStfGR7FPeb0yeSzVXl~2SqpzD5MBvnYCRmDkgT2h-Q~MRgVDS9mxNK7ouJlRGWxR~6KSmWilzY9HNJhdf2xx8GRtks2GO02yv5NDLWAqM8BqIjdt5h0YuUkjY73zCl0a80t4kPlUJzEBU1oeQ9jZhBKN-U4vr7~CFiq~wh9NYvfzDV0Vm1EvZqQo6nTzgskObo2AbPffrAg5Vw7MqY~NwESwhBCI2vZnFGkjFCxqDNsQ20UJhbZzZvkAN81Sam-eDw__",
    },
    {
      id: 4,
      name: "Porttitor cum",
      price: "$90",
      image: "https://s3-alpha-sig.figma.com/img/d29f/2932/bfa12ced19f8fc978547241abf5006c1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AMDFxrhSbJrppzxhpR1vylfB-6gNM0CVkS-y05-q2YGIMDezDeV~eT1j~y13WxfpWk0rmCgFn10TGgIfhBb~C8oxG7BTCjr5GcMuShgI12m0267YskfrHjNw9j1u~FwtlrfKUXOgc2Kru-TQKiBGiZPQG4AG~MsHH3Wkgp0yiAwAvCwX3angeQum~rvf0IaWdboT6Adbyv9zBjpub8~UoB4BQgJfRwa5lvez96kj1PcXWvavYfDGUW8EYXeuKpMpuR0sWEpygowg~ijOBod~TWih0xF-6y-DFq0t4DobdDAQ7aVoA61o7vW4ydvGz2uQCk1vLS-lQGX6tIx3iOfVzA__",
    },
    {
      id: 5,
      name: "Nunc in",
      price: "$50",
      image: "https://s3-alpha-sig.figma.com/img/6aaa/84eb/7846d7d8e0089353a0b5c1675caecf62?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aDoD6hMVqOR-QvltGViFK0o~7KqpcK595ub42Qywejtcx~AhurbpX5FeHa5maiZHmUkJaNnZLvtZqHE6cLsNd4ZScUY3~6~niBVR660pyUSPQhtzwKIgc5L6xrfFULj1nCzKFn2RXMJb01GzAagpRP7U54K6jPXClLFIfAzp7fClYnozISCpd~-C0FA8Q9I0iFtBRjfi~UOYsoMilifNHZB5q1opeR28DzM0PbIwHjSEGUiX9qjyglHdK3hUwz4N1poWbuqmug2xo9LJOALTn7Hsl0Df7KdjiqNUb2ewKX3~TrXtDN81a4T5H3IFNrAJLPmEJoZi9chLzi1nZo6HkA__",
    },
    {
      id: 6,
      name: "Smartphone Case",
      price: "$25",
      image: "https://s3-alpha-sig.figma.com/img/d5e2/b080/ab604b0a1374703cbdb110258990ecc2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bagAX9I2rVu6yg0Zzk9sSb2tkAhgK4yDzmTKbxCf342NjkfXW9Wz5eKoEymoCIIs2oxl~~klF~u~KE8lb4cWvPgH6DM5E8KlVOZXM2KE71Hl9ZrRrTBQt19-qwMcJJ3YvDfT63UxMnMmB880qa17Gt9GBbPcC-7Hx07hMZRVftjCH7XGoISlccqVU7sE8ROJhVbxJ5lohIwN1rzKwQcJwTysdXPnxJ0wfLPxIPxFLifIbu7-OVVPOqal4gNMJGx7VXKW13RG9Gefw9K1e0juL1nS3sZSTz9ePdVAzP4OmCOnZcyxD3C12RsV237kuG8wgI-Xeo1SqeMcJP4AORUNQA__",
    },
    {
        id: 7,
        name: "Smartphone Case",
        price: "$25",
        image: "https://s3-alpha-sig.figma.com/img/15b1/f528/f65103dd0576c59df41fb55d46ced20b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AhMbqZsRDVMUfC7nV0LGpSu55IMxUJiYiYi4VZtct02UQXRJuiWPQbNFpKDpz5HCrDcwl~06z2zyUHayzHIGhfqcDKnCuZqYfTMcRzRnLWAWyPxMfWEzmkSGN1sTmnsa2WRsVnhzZCO9x6dozOVLHieaX5EJ7HhPxo~wmH6aA23US2q57gVjVBeC8iFRLwy~W8lUme5L9~zYZCJiBy71cOOYjykxSsvzOfgjSJfG0NHVH2Ps~VxtI1gTOqpalkdLhCBbnLUyeYIMmePwFGacms2bnxqN3WI3-UB2litZvHoYPFE5Pr55JmEzaWYgV9lcA~JXpMtnuT10KI6fIw~JHQ__",
      },
  ];

  return (
    <div>
      <Header />
      <Navbar />

      {/* Banner Section */}
      <section className="bg-purple-100 py-24 text-center md:text-left">
        <h1 className="text-4xl font-bold mx-6 md:ml-24">Shop List</h1>
        <div className="mx-6 md:ml-24">
          <a href="#">Home</a> . Pages . <a className="text-pink-600" href="#">Shop List</a>
        </div>
      </section>

      {/* Shop Controls Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="text-left">
            <h2 className="text-2xl font-bold">Ecommerce Accessories & Fashion</h2>
          </div>

          {/* Filter options */}
          <div className="flex space-x-4">
            {/* Sort By */}
            <div className="flex items-center">
              <label className="mr-2">Sort by:</label>
              <select
                className="border border-gray-300 rounded-md p-2"
                onChange={(e) => setSortBy(e.target.value)}
                value={sortBy}
              >
                <option value="">Default</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
              </select>
            </div>

            {/* Per Page */}
            <div className="flex items-center">
              <label className="mr-2">Per page:</label>
              <select
                className="border border-gray-300 rounded-md p-2"
                onChange={(e) => setPerPage(Number(e.target.value))}
                value={perPage}
              >
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={48}>48</option>
              </select>
            </div>

            {/* View Options */}
            <div className="flex items-center">
              <label className="mr-2">View:</label>
              <select
                className="border border-gray-300 rounded-md p-2"
                onChange={(e) => setView(e.target.value)}
                value={view}
              >
                <option value="grid">Grid</option>
                <option value="list">List</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${view === "grid" ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" : "flex flex-col gap-6"}`}>
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg shadow-md p-4">
              <img className="w-auto h-40 object-cover rounded-md" src={product.image} alt={product.name} />
              <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Image (You can remove this if not needed) */}
      <img className="ml-24 w-[1000px] mt-12" src="https://s3-alpha-sig.figma.com/img/8b8f/73ef/0917d8479a5c41ee633cb4a6233f64b7?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JxTJWchXSnjD3WBTvieRxV0mGAnGZf6~scupDFthlCgkDCd65RaYyupp~30Aot2yNhFMfYD5MMfY8qBm2UmKVUjHPQULc~oztbU-40L42dCa3dA0b1prAc2MnyL933Q2i3FEdMTTaB4YIkqIvnpyodrOWfr9Bkdh4XHJDM15s-WnXFZDbVKDIhL2zackyppWejMU1IFT6X6Ah8ehQHuZh5QKDSMAAsZgiIyJP7UNeXaoC7JPABxJfMg15VcipvhwsePwJxo5r8p~ArJzAanKb5I8nKzHskXVtQbGqYawlTStoULwTQbbM76FwCPYsQXw0ut3C81HOL9mE~qKfrlZ6w__" alt="logo" />
<div className="mt-8">
      <Footer />
  </div>  </div>
  );
}
