"use client"
import Header from "@/app/component/header/page";
import Footer from "@/app/component/footer/page";
import Navbar from "@/app/component/navbar/page";
import { useState, useEffect } from "react";
import { FaCartPlus, FaHeart, FaSearchPlus } from 'react-icons/fa';

export default function Shopgriddefault() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 50,
      image: 'https://s3-alpha-sig.figma.com/img/4851/c906/03270716b886324ea4b54a2320807d8b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MVD3d4plE~mMXWp-gFeO9RwpMRn0Yw04zipF-BiLrQLxsmagBd7o471fbUzmdODcmfl6LrjOojulVa4slnWzw9dptL96oODurgyXm0iwBtqW5tcUlL7QBWo2Rq93yjH4Q97ZwUwCzoAgurZa9bKynvr~ty1i4CYfvrHzAgpXSrTzpLhJitQvhqyCA2n0O5CYmFDDEAd0priKhBp~JnjGnacjHlLLEgkglo09-V-XkFMVXRb8KkL3kq3lGNQKDCB6LtGHaIU-O5zKX10gYtVAtxnRPmok1ACy5TnfiCv1ho~GHlqy3brgZ0U6LAYmr4RZnhlgpvv70WIWDTrrt49d0g__',
      colors: ['red', 'blue', 'green'],
    },
    {
      id: 2,
      name: 'Product 2',
      price: 70,
      image: 'https://s3-alpha-sig.figma.com/img/9db5/545f/6002c578779f313538a8a68e1a6f8050?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TRTPEpN9z~c5Dlq6f~UOUdD5F7JC0v3~~yCVSghZZku2wqTFsNpJm~IpMXkdub2C-OubksFf4jWLUwdLAAURDtfUx3ZMyJAL0j55qKlEm7zQTNmEbxd9JARnG5c1ltxCu44AE~5LVVK8n7nyxfGvfg7K1fND6gN7j16CbjmeHrimhZBmhCWhF8dsNcA~qHEh~ryGZrQEXetkZMavwoz8cYP60IC~d33LvF8jyjFHrtu8ofII-UN18UBhgpWZ1AHaO6iaxm4u02W4q0UmxczXNLpBUGidDRbALmIuiWnU7JCBYyVoQr0gL-AFXQXAldn0fTp4G-2-F5zKzCQ16TAX2w__',
      colors: ['yellow', 'black'],
    },
    {
      id: 3,
      name: 'Product 3',
      price: 80,
      image: 'https://s3-alpha-sig.figma.com/img/795e/f307/40fb6d72006bc9fe7a747b3dfca0a5de?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L3cqRabfpaiJQHW-wjyqprBzRmdubC9CZLxGBs1nlq1hM1ZZVmKy9Uic1V8uaXL8JRFJTb3e7RK6K3FBu2d9jlpRkbcxRYXILROSwJuBQpSV3C73fcx7BPeky-qHQdmnnFnWQaVUGcSG2abdEPdVYeZ8sGJeCWVgejm~dJaq~LK7vAoK4ESIgkFoh-gw4jhSZ~~W8G~AylrHAbSWOHpKlcWBfLd~RyWUOHyZ~3kC9Jou5LInhTN6Q7aWQQlcQcrI3ApNqKIJvXIAUUaJzk5U7P6-Ynw68noq2QPQb9StDTSphfL55WaFz7~9a1QrSoisu12wZEWGAvf~pfCVC4npQw__',
      colors: ['green', 'purple'],
    },
    {
      id: 4,
      name: 'Product 4',
      price: 100,
      image: 'https://s3-alpha-sig.figma.com/img/c298/504d/adeb68467abfedd08c1e1d67526e0d7a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a9rM0VsRCrkuC2dVbxxIaS~zGuYoT50mTX2QXhDxiF~tJHm2bGbgKxfuvsPO33SgA3MyCdWxRRJGhNVFEExzC5dNpgM0uNaDhr4NKh4mJIiIWvt7vibsJaiAIdw~BTiJ~dQjWn0mF8mkrmIrX50T9EepLGop35StE5vcQ8QYWOO2X~Uo5YEhfBuBdD8WXbWDOPPmau-1tB1C3KACucPUevJAstBgW5ObvyXmsX2TgXcAWjG0edk-Cz2drTrbDG0Y56gAFhgnU~z-hZv2JE6RHaDKMH2QJst52sn7ZrjTCuIlFoewTMrDobRaZRHPTjKOoksh0WOC0o1WPs-7tmqIJQ__',
      colors: ['blue', 'orange'],
    },
    {
      id: 5,
      name: 'Product 5',
      price: 120,
      image: 'https://s3-alpha-sig.figma.com/img/fd2f/84fd/2c2d0ada0fbe15246b3ac6692d538aea?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CgcmNAAR2oi12LuiEKsD70yY0k~i8DJeW~63V2tVVcZ9fBVFadkxptAsnlXjmsj7iGP3PlmgIFLTDaAEuQQDlZOYfFAB8nTB18JBfq~jE6d3vMyMTYfXWQ~JAEDCZ0saXOsTKTomYCmhwliOT9oADwDu0ukvuhEQiLWm-JRHbmyNAcaEjZ13kH0lUOhnshXnKIGT1Elpny9o87n8q6IoGP6iffW358Ul-c~7IyL8zGdN1Fo~zEmEyiic9gu-QpbKKtDAkDE-s3Nh9~nkFiBi~CUcnWrfvQRU0oNnaxblrMCeumbd-l2ly-8IjgcQvexGmymKEEXcALws1VHF6qkxMw__',
      colors: ['red', 'yellow'],
    },
    {
      id: 6,
      name: 'Product 6',
      price: 150,
      image: 'https://s3-alpha-sig.figma.com/img/8143/e8cd/09780c98df0e8ca5a7c576a7097d9a4d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tDMTrUHCKKMUJf2bL1BDcVokNAVv5NEcy129L3DQtSjQuaos4rUrnTwM2rtK8~iukDmgUBlKL7crikH~QRs2And2YZtrwJSTIJQGXdOXDxZb-Zkc5-MR4l9rKyYiQwSZ6SOD2e-J3k9ebb4YpWNS7vUrEcQKfIKYvCXaSEynC~6kS5NKQtt7tMzeacI4zu79ZxkPp4ihi~7ovNtWnXJoDftYVEGfhsYcsUeP1k~PWp0bRsF4onEijJnMCF81iTSnymK6Kk9Q~UU6Wgzdd30ufl4~o6Ukcxf3fRgeF9DU~XeKtHAigzhG8tZC0xsA4GLoo4uDGVtTqsbAdU31v7ya5A__',
      colors: ['purple', 'black'],
    },
    {
      id: 7,
      name: 'Product 7',
      price: 200,
      image: 'https://s3-alpha-sig.figma.com/img/59de/f39f/4cf484a463c3db3e312bea9e660f449d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B5yqMdM3IdFqlL7pZ8plP2DXhWY7~g~cdTVX4x0DBEIh2brU4VohG7YhePViJCxV-Y~yO9bPfs8Y0pR2A2LfV4JRD9cwqcnzIYAX3Zfm8YsXpUUCOU4rRW9tnS8CgT1U2DHsbeM1OY1G~9q1FE9chJnckgQw9hLEEZvSgkKclMPxW52dRSKScuaAxGi~J0LgktB8l4v0zjKDPa5oJEM9tbf1UCYQfWrMFQ23fjQmL1wAqnOKmhR17GP3-PS2vIoPwjNreKy-0dpEIjmq7rYPcmAMdcUNAsTaEgK-etGLxUYzmBJQx7VipOpmH5b0oJhJ0LZZHW0aZNCM1U3fH7sFpw__',
      colors: ['blue', 'green'],
    },
    {
      id: 8,
      name: 'Product 8',
      price: 250,
      image: 'https://s3-alpha-sig.figma.com/img/68de/911f/7877d7223d13169b98bd9540d24d5673?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IxGAQvMo33NVohFUwU15udjVoghvy0y4u9YzstSZqAQIbdv0rTgjqVYktDALyfZSzewAx2bi-xWmg9KkG2UyYmaYmlxzHgeEtw0Jz1D0UhDrRPqF3r3QdU-fr53aOIwxPSdnc9midMiGH3siQF3gcjyXuS46Pm~SsqsYzc8lg58XzZLHbsVfa1HBbVhoTKFACxo~0CtASdFJAbKygR~xwADcRfRtwVjp8Bs-7p2ANlOr0OfoOBLdagKmsVowU9eyHe898OOb1wgDGxAjgHTIRodClc9Enec2SRizGjt1RI5faQSOj11IuVXseebXf4V02L81y-Iv82GoXDPesw1JIA__',
      colors: ['green', 'yellow'],
    },
    {
      id: 9,
      name: 'Product 9',
      price: 300,
      image: 'https://s3-alpha-sig.figma.com/img/dad6/283f/cf563ab816e36d2754c94e88b5f4ed21?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tD4Qp6xPiOWfQ-mflkzMy~PJXOEBKOGbFbQ6k9tPaqZeU495ARrWgzlK5wsDmubVnINneTnoE~onvyPx~1O4k6Ak8I0AElrJ7T1iG93Ct0M13P3xMaWqSL4p7SHBNL769k1W7Ww3e9dgfbWcB3xX9dSUIzi2qvv8qqd-PYtSG0iUtEGpxzrVYjpBVueYCpQWQtlTt9y79TF9xMoi2DG-ZKSsNU~LlKdT3d-gc9C9Ge0JGKfMNLJjRSvIxsMpMIu~E2P9Pt~-ZWnQ2b9AGOXGUpx2pf7hK4drXhGP2bdWFqds2EOlG9ECA7FBFtIEsQ27JI~E1xqAS4ENMQKKCDHT2A__',
      colors: ['red', 'black'],
    },
    {
      id: 10,
      name: 'Product 10',
      price: 350,
      image: 'https://s3-alpha-sig.figma.com/img/5d23/d89f/fb399a001ca2c9596b7e4e167945bbdc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=glmDZLAwMN1QqNs3K9lm6hpi-6FkEdXywvSs2lRYVnsQEzrxeNmHPlsiObEtmotF57zfkMBw7JmOg~BqTQsRRXEPx5PlTfH5BSdH2tvAJ2dD0ktGoJuZDbnB6-5XmGXZDjjk1ZZ3kBn-8p3wsBn9HCgper7qteSezfcAdar20SfUqxo-8Uu~066vU2yEsohKZRV9u9YebNHrOsPKdmMC0qQCwIIEGnl5bqoDenPNPxbWKUByeRI1JbThh4GUZBr6j04yOr00~fGRAwZZ-0Dnr5KsWQOtseMnoqMeFaPN5IpY-Hn6LliP7V0ejAhAe5Zu4SBV1boXfukSwEmL1qjkyg__',
      colors: ['blue', 'orange'],
    },
    {
      id: 11,
      name: 'Product 11',
      price: 400,
      image: 'https://s3-alpha-sig.figma.com/img/93ea/e296/578b831cdad3eb6622f8100a707cf7c3?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mxuyH7rbedw88X-bkymOyQ1eGZ2El05i4nz70XR4v0Qj~RYiYmE~QRiDIt3-mvfUn3DJfyeO-T81WwZapnfCLnXrSRZAiLjoR-zwhfkkOrMJAp42iCQvCYSCHTm3Z6v2sTiLfLMr-0o6fpIUkZZ3ElseLD0prwPbwgp6FiKpHNjNs-fcC7g4oUulTXOAZ9mVppC-N18THcv3RxKJQxObjetTiUE2ZgfHj8tLu25c9SDwS7XZYuN9Q2l7baiyIcm2uCSI~BLu7WUZY8lbzIaAARgRoX2h8bloeDHrYqouxQMdaRB8A-5ggLdAQntLXvVj~ZFCXxKHSx6-GpH75634VQ__',
      colors: ['yellow', 'green'],
    },
    {
      id: 12,
      name: 'Product 12',
      price: 500,
      image: 'https://s3-alpha-sig.figma.com/img/c298/504d/adeb68467abfedd08c1e1d67526e0d7a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a9rM0VsRCrkuC2dVbxxIaS~zGuYoT50mTX2QXhDxiF~tJHm2bGbgKxfuvsPO33SgA3MyCdWxRRJGhNVFEExzC5dNpgM0uNaDhr4NKh4mJIiIWvt7vibsJaiAIdw~BTiJ~dQjWn0mF8mkrmIrX50T9EepLGop35StE5vcQ8QYWOO2X~Uo5YEhfBuBdD8WXbWDOPPmau-1tB1C3KACucPUevJAstBgW5ObvyXmsX2TgXcAWjG0edk-Cz2drTrbDG0Y56gAFhgnU~z-hZv2JE6RHaDKMH2QJst52sn7ZrjTCuIlFoewTMrDobRaZRHPTjKOoksh0WOC0o1WPs-7tmqIJQ__',
      colors: ['red', 'purple'],
    }
  ]);

  const [perPage, setPerPage] = useState(12);
  const [sortBy, setSortBy] = useState('');
  const [view, setView] = useState('grid');

  useEffect(() => {
    let filteredProducts = [...products];

    // Sort products based on selected sort option
    if (sortBy === 'priceLowToHigh') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHighToLow') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(filteredProducts);
  }, [sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />

      <section className="bg-purple-100 py-24 text-center md:text-left">
        <h1 className="text-4xl font-bold mx-6 md:ml-24 text-blue-900">
          Shop Grid Default
        </h1>
        <div className="mx-6 md:ml-24 mt-2">
          <a href="">Home .</a> Pages .{" "}
          <a className="text-pink-600" href="">
            Shop Grid Default
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="text-left">
            <h2 className="text-2xl font-bold">Ecommerce Accessories & Fashion</h2>
          </div>

          {/* Filter options */}
          <div className="flex space-x-4">
            <div className="flex items-center">
              <label className="mr-2">Sort by:</label>
              <select
                className="border border-gray-300 rounded-md p-2"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Default</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
              </select>
            </div>

            <div className="flex items-center">
              <label className="mr-2">Per page:</label>
              <select
                className="border border-gray-300 rounded-md p-2"
                onChange={(e) => setPerPage(Number(e.target.value))}
              >
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={48}>48</option>
              </select>
            </div>

            {/* View options dropdown */}
            <div className="flex items-center">
              <label className="mr-2">View:</label>
              <select
                className="border border-gray-300 rounded-md p-2"
                onChange={(e) => setView(e.target.value)}
              >
                <option value="grid">Grid</option>
                <option value="list">List</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product grid or list view */}
        <div className={view === 'grid' ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6" : "space-y-6"}>
          {products.slice(0, perPage).map((product) => (
            <div key={product.id} className="border border-gray-200 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out">
              <img
                src={product.image}
                alt={product.name}
                className="w-auto h-64 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <div className="flex space-x-4 mt-2">
                <FaCartPlus className="text-blue-500 cursor-pointer" />
                <FaHeart className="text-red-500 cursor-pointer" />
                <FaSearchPlus className="text-gray-500 cursor-pointer" />
              </div>

              {/* Color filter below the product image */}
              <div className="mt-2">
                <span className="font-semibold">Colors:</span>
                <div className="flex space-x-2 mt-2">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className={`inline-block w-6 h-6 rounded-full cursor-pointer ${color === 'red' ? 'bg-red-500' : ''} 
                        ${color === 'blue' ? 'bg-blue-500' : ''} 
                        ${color === 'green' ? 'bg-green-500' : ''} 
                        ${color === 'yellow' ? 'bg-yellow-500' : ''} 
                        ${color === 'black' ? 'bg-black' : ''} 
                        ${color === 'purple' ? 'bg-purple-500' : ''} 
                        ${color === 'orange' ? 'bg-orange-500' : ''}`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
<img className="ml-12 w-[1200px] mb-8" src="https://s3-alpha-sig.figma.com/img/8b8f/73ef/0917d8479a5c41ee633cb4a6233f64b7?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JxTJWchXSnjD3WBTvieRxV0mGAnGZf6~scupDFthlCgkDCd65RaYyupp~30Aot2yNhFMfYD5MMfY8qBm2UmKVUjHPQULc~oztbU-40L42dCa3dA0b1prAc2MnyL933Q2i3FEdMTTaB4YIkqIvnpyodrOWfr9Bkdh4XHJDM15s-WnXFZDbVKDIhL2zackyppWejMU1IFT6X6Ah8ehQHuZh5QKDSMAAsZgiIyJP7UNeXaoC7JPABxJfMg15VcipvhwsePwJxo5r8p~ArJzAanKb5I8nKzHskXVtQbGqYawlTStoULwTQbbM76FwCPYsQXw0ut3C81HOL9mE~qKfrlZ6w__" alt="bg" />
      <Footer />
    </div>
  );
}
