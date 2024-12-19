import { db } from "@/utils/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Product from "./Product";

export default async function FeatureProducts() {
  const products = (
    await db.query(`SELECT 
    products.id,
    products.name,
    products.description,
    products.price,
   
   images.id AS image_id,
    images.url AS image_url,
    images.name AS image_name
FROM 
    products
LEFT JOIN 
    images
ON 
    products.id = images.products_id limit 4`)
  ).rows;

  //   console.log("products limit", products);
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap mb-24">
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}
