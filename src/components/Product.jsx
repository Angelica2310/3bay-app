import { db } from "@/utils/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Modelviewer from "./ModelViewer";
import AddToCartButton from "./AddToCartButton";

export default async function Product({ product, ownShop }) {
  const sideLng = 240;
  const modelData = await db.query(
    "SELECT * FROM glbs WHERE product_id = $1  LIMIT 1",
    [product.id]
  );

  async function altImage() {
    "use server";
    const altImg = (
      await db.query("SELECT * FROM images WHERE products_id = $1 LIMIT 1", [
        product.id,
      ])
    ).rows[0];

    return (
      <>
        {altImg.url === null ? (
          <Image
            alt={altImg.name}
            src={`https://11mn4if8mi.execute-api.eu-west-2.amazonaws.com/dev/3bay-files/${altImg.id}`}
            width={sideLng}
            height={sideLng}
            className="rounded-md"
          />
        ) : (
          <div className="relative w-56 h-56">
            <Image
              src={altImg.url}
              alt={altImg.id}
              fill
              style={{ objectFit: "cover" }}
              sizes="25vw"
              className="absolute rounded-md"
            />
          </div>
        )}
      </>
    );
  }

  return (

    <div>
      <Link
        href={`/products/${product.id}`}
        key={product.id}
        className="bg-white rounded-lg w-60 h-80"
      >

    <div key={product.id} className="bg-slate-200 rounded-lg w-60 h-80 p-2">
      <Link href={`/products/${product.id}`}>

        <div id="imageModel">
          {/*modelData.rowCount !== 0 ? (
          <Modelviewer id={modelData.id} className="w-60 h-60" />
        ) : (*/}
          <div children={altImage()}></div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">{product.name}</span>
          <span className="font-semibold">£{product.price}</span>
        </div>
        <div className="text-sm text-gray-500">{product.description}</div>

      </Link>
      {/* If ownShop bool was passed as prop and is true (product was added by logged in user) then show edit product button, otherwise add to cart button */}
      {ownShop ? (
        <button className="cart-button">Edit Product</button>
      ) : (
        <AddToCartButton product={product} />
      )}

        {/* If ownShop bool was passed as prop and is true (product was added by logged in user) then show edit product button, otherwise add to cart button */}
      </Link>
      {ownShop ? (
        <button className="cart-button">Edit Product</button>
      ) : (
        <AddToCartButton className="cart-button" product={product} />
      )}
      {/* <button className="cart-button">Add to Cart</button> */}

    </div>
  );
}
