import { db } from "@/utils/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Modelviewer from "./ModelViewer";

export default async function Product({ product }) {
  const sideLng = 100;
  const modelData = await db.query(
    "SELECT * FROM images WHERE products_id = $1 AND model = 'true' LIMIT 1",
    [product.id]
  );

  async function altImage() {
    "use server";
    const altImg = await db.query(
      "SELECT * FROM images WHERE products_id = $1 AND model = 'false' LIMIT 1",
      [product.id]
    );
    return (
      <Image
        alt={img.name}
        src={`https://11mn4if8mi.execute-api.eu-west-2.amazonaws.com/dev/3bay-files/${altImg.id}`}
        width={sideLng}
        height={sideLng}
      />
    );
  }

  console.log(imgFile);
  return (
    <Link href={`/products/${product.id}`}>
      <div id="imageModel">
        {modelData.rowCount !== 0 ? (
          <Modelviewer
            id={modelData.id}
            className={`w-[${sideLng}px] h-[${sideLng}px]`}
          />
        ) : (
          () => altImage()
        )}
      </div>
      <div className="flex justify-between">
        <p>Product Name{product.name}</p>
        <div>
          <p>PRICE{product.price}</p>
          <p>{product.shipping}</p>
        </div>
      </div>
    </Link>
  );
}
