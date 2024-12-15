import { db } from "@/utils/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function FeatureProducts() {
  const products = (
    await db.query(`SELECT 
    products.id,
    products.name,
    products.description,
    products.price,
   
    images.url AS images_url
FROM 
    products
LEFT JOIN 
    images
ON 
    products.id = images.products_id limit 4`)
  ).rows;

  //   console.log("products limit", products);
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link
              href={`/products/${product.id}`}
              className="w-full flex flex-col gap-4"
            >
              <div className="relative w-60 h-60">
                <Image
                  src={product.images_url}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="25vw"
                  className="absolute rounded-md"
                />
              </div>

              <div className="flex justify-between">
                <span className="font-medium">{product.name}</span>
                <span className="font-semibold">£{product.price}</span>
              </div>
              <div className="text-sm text-gingeralefizz ">
                {product.description}{" "}
              </div>
              <button className="cart-button">Add to Cart</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
{
  /* <Link
  href="/products/1"
  className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
>
  <div className="relative w-full h-80">
    <Image
      src="/slide1.jpg"
      alt=""
      fill
      sizes="25vw"
      className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
    />
    <Image
      src="/slide2.jpg"
      alt=""
      fill
      sizes="25vw"
      className="absolute object-cover rounded-md"
    />
  </div>
  <div className="flex justify-between">
    <span className="font-medium">Product name</span>
    <span className="font-semibold">£10</span>
  </div>
  <div className="text-sm text-gray-500">Product description</div>
  <button className="rounded-2xl ring-1 ring-sky-600 text-lama w-max py-2 px-4 text-xs hover:bg-sky-600 hover:text-white">
    Add to Cart
  </button>
</Link>
<Link
  href="/products/1"
  className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
>
  <div className="relative w-full h-80">
    <Image
      src="/slide1.jpg"
      alt=""
      fill
      sizes="25vw"
      className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
    />
    <Image
      src="/slide2.jpg"
      alt=""
      fill
      sizes="25vw"
      className="absolute object-cover rounded-md"
    />
  </div>
  <div className="flex justify-between">
    <span className="font-medium">Product name</span>
    <span className="font-semibold">£10</span>
  </div>
  <div className="text-sm text-gray-500">Product description</div>
  <button className="rounded-2xl ring-1 ring-sky-600 text-lama w-max py-2 px-4 text-xs hover:bg-sky-600 hover:text-white">
    Add to Cart
  </button>
</Link>
<Link
  href="/products/1"
  className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
>
  <div className="relative w-full h-80">
    <Image
      src="/slide1.jpg"
      alt=""
      fill
      sizes="25vw"
      className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
    />
    <Image
      src="/slide2.jpg"
      alt=""
      fill
      sizes="25vw"
      className="absolute object-cover rounded-md"
    />
  </div>
  <div className="flex justify-between">
    <span className="font-medium">Product name</span>
    <span className="font-semibold">£10</span>
  </div>
  <div className="text-sm text-gray-500">Product description</div>
  <button className="rounded-2xl ring-1 ring-sky-600 text-lama w-max py-2 px-4 text-xs hover:bg-sky-600 hover:text-white">
    Add to Cart
  </button>
</Link>
<Link
  href="/products/1"
  className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
>
  <div className="relative w-full h-80">
    <Image
      src="/slide1.jpg"
      alt=""
      fill
      sizes="25vw"
      className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
    />
    <Image
      src="/slide2.jpg"
      alt=""
      fill
      sizes="25vw"
      className="absolute object-cover rounded-md"
    />
  </div>
  <div className="flex justify-between">
    <span className="font-medium">Product name</span>
    <span className="font-semibold">£10</span>
  </div>
  <div className="text-sm text-gray-500">Product description</div>
  <button className="rounded-2xl ring-1 ring-sky-600 text-lama w-max py-2 px-4 text-xs hover:bg-sky-600 hover:text-white">
    Add to Cart
  </button>
</Link> */
}
