"use client"
import Image from "next/image"
import React, { useEffect, useState} from "react";
import { Product } from "../../../../types/product";
import { client } from "@/sanity/lib/client";
import { allProducts, four } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const furniture = () => {
    const [product, setProduct] = useState<Product[]>([])
    useEffect(() => {
        async function fetchproduct() {
            const fetchedProduct : Product[] = await client.fetch(allProducts)
            setProduct(fetchedProduct)
        }
        fetchproduct()
    },[])
   return(
<div className="max-w-6xl mx-auto px-4 py-8">
   <h1 className="text-2xl font-bold mb-6 text-center">
    Our Latest Products</h1>
    
    <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"></div>
     {product.map((product) => (
        <div key={product._id}
        className="border rounded-lg shadow-md px-4 hover:shadow-lg transition duration-200">
            {product.productName}
            <Link href={`/component/product/${product.slug.current}`}/>
            {product.image && (
                <Image
                src={urlFor(product.image).url()}
                alt="image"
                width={100}
                height={100}
                className="w-full h-48 object-cover rounded-md"
                />
                
            )}
            <h2 className="text-lg font-semibold mt-4">{product.productName}</h2>
            <p className="text-gray-500 mt-2">
                {product.price ? `$${product.price}` : "price not available"}
            </p>
            {product.price}
        

        </div>
    ))}

</div>
   );
};
export default furniture;