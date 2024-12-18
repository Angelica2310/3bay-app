import { GetProduct } from "@/utils/actions";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";

export default async function SingleProductPage({ params }) {
  const prodId = (await params).id;
  const product = await GetProduct(prodId);

  if (!product) {
    redirect("/products");
  }

  return (
    <div className=" flex flex-col my-4 mx-4 sm:my-6 sm:mx-6">
      <div className="flex">
        <div className="flex flex-col items-center">
          <div className="w-32 h-40 sm:w-44 sm:h-52 lg:w-52 lg:h-60 xl:w-60 xl:h-72 bg-slate-600 text-white text-center mb-2 rounded-lg">
            Image placeholder
          </div>
          <div className="mt-2">
            <button className="bg-slate-700 text-white rounded-xl py-1 px-2 sm:px-3 lg:px-6 xl:px-10 sm:text-lg xl:text-xl">
              View In 3D
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-2 lg:ml-6 lg:mt-2 xl:mt-4 w-full">
          <div>
            <h2 className="font-bold text-xl sm:text-3xl xl:text-4xl">
              {product.name}
            </h2>
          </div>
          <div className="flex flex-col mt-2 pl-2">
            <div className="flex justify-start items-center pt-2 sm:pt-3 xl:pt-6">
              <div className="font-semibold text-lg sm:text-2xl xl:text-3xl">
                £{product.price}
              </div>
              <div className="pl-16 sm:pl-20">
                <Link
                  href={`/store/${product.shop_id}`}
                  className="bg-gingeralefizz py-1 px-2 sm:text-lg xl:text-xl rounded-lg hover:bg-benihired hover:text-white"
                >
                  View Store
                </Link>
              </div>
            </div>
            <div className="italic pt-1 sm:pt-2 xl:pt-4 sm:text-lg xl:text-xl">
              plus £{product.shipping} shipping
            </div>
          </div>
          {/* <div className="flex mt-6 mx-1"></div> */}
          <div className="mt-10 lg:mt-14 xl:mt-18 flex justify-center sm:justify-start sm:pl-6">
            <div className="">
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 xl:mt-14 mx-2 sm:text-lg lg:text-xl xl:text-2xl">
        <div className="h h-32">{product.description}</div>
        <div className="mt-10 h-32">Extra images go here</div>
      </div>
    </div>
  );
}

{
  /* {product.image_url === null ? (
            <Image
              alt={product.name}
              src={`https://11mn4if8mi.execute-api.eu-west-2.amazonaws.com/dev/3bay-files/${prodId}`}
              width={140}
              height={140}
              className="rounded-md"
            />
          ) : (
            <div className="relative w-60 h-60">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="25vw"
                className="absolute rounded-md"
              />
            </div>
          )} */
}
