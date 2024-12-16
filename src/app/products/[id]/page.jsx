import AddToCartButton from "@/components/AddToCartButton";
import { db } from "@/utils/db";
import Image from "next/image";

export default async function SingleProductPage({ params }) {
  const id = (await params).id;
  const product = (
    await db.query(`SELECT 
    products.name,
    products.description,
    products.price,
    products.id,
    images.url AS images_url
FROM 
    products
LEFT JOIN 
    images
ON 
    products.id = images.products_id
WHERE 
    products.id=${id};`)
  ).rows[0];

  // console.log("product", product);
  return (
    <div>
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

      <div className="flex ">
        <span className="font-medium">{product.name}</span>
        <span className="font-semibold">£{product.price}</span>
      </div>
      <div className="text-sm text-gingeralefizz">{product.description} </div>
      <AddToCartButton product={product} />
    </div>
  );
}
