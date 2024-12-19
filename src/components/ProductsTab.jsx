import { db } from "@/utils/db";
import React from "react";
import Product from "./Product";

export default async function ProductsTab() {
  const products = (
    await db.query(`SELECT 
        products.*,
        images.url AS image_url,
        images.id AS image_id,
        images.name AS image_name
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
