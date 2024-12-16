import { db } from "@/utils/db";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Product from "@/components/Product";
Link;

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
    products.id = images.products_id;`)
  ).rows;

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="mt-12 text-2xl">All products</h1>
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap ">
        {products.map((product) => {
          return <Product product={product} />;
          {
            /*<div key={product.id}>
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
                <div className="text-sm text-gingeralefizz">
                  {product.description}{" "}
                </div>
                <button className="cart-button">Add to Cart</button>
              </Link>
            </div>*/
          }
        })}
      </div>
    </div>
  );
}
