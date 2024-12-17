import { db } from "@/utils/db";
import React from "react";
import Product from "./Product";

export default async function ProductsTab() {
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
      <div className="my-12 flex gap-x-8 gap-y-16 justify-between flex-wrap ">
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
