import { GetProduct, GetShopByUserId } from "@/utils/actions";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import AddProductBtn from "@/components/AddProductBtn";
import { GetUser } from "@/utils/actions";
import AddToCartButton from "@/components/AddToCartButton";
import { db } from "@/utils/db";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = (await params).id;

  const product = (await db.query(`SELECT * FROM products WHERE id = ${id}`))
    .rows[0];

  // console.log("id: ", id);
  return {
    title: `${product.name} | Details`,
    description: `More about ${product.name}`,
  };
}

export default async function SingleProductPage({ params, searchParams }) {
  const prodId = (await params).id;
  const product = await GetProduct(prodId);
  const editParam = await searchParams;
  const edit = await editParam.edit;
  const user = await GetUser();
  let ownProduct = false;

  // Check if product was added by logged in user and if so updates bool for conditionally rendering edit button.
  if (user) {
    const shop = await GetShopByUserId(user.id);
    if (shop) {
      if (product.shop_id == shop.id) {
        ownProduct = true;
      }
    }
  }

  if (!product) {
    redirect("/products");
  }

  async function image() {
    "use server";

    return (
      <>
        {product.image_url === null ? (
          <Image
            alt={product.image_name}
            src={`https://11mn4if8mi.execute-api.eu-west-2.amazonaws.com/dev/3bay-files/${product.image_id}`}
            fill
            style={{ objectFit: "contain" }}
            className="rounded-md"
          />
        ) : (
          <p>no image</p>
        )}
      </>
    );
  }

  return (
    <div className=" flex flex-col my-4 mx-4 sm:my-6 sm:mx-6">
      <div className="flex">
        <div className="flex flex-col items-center">
          <div
            className="w-32 h-40 sm:w-44 sm:h-52 lg:w-52 lg:h-60 xl:w-60 xl:h-72 bg-prismarine text-white text-center mb-2 rounded-xl relative"
            children={image()}
          ></div>
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
          <div className="mt-10 lg:mt-14 xl:mt-18 flex justify-center sm:justify-start sm:pl-6">
            {ownProduct ? (
              <AddProductBtn
                shopId={product.shop_id}
                productId={product.id}
                edit={edit}
              />
            ) : (
              <div className="bg-gingeralefizz rounded-2xl">
                <AddToCartButton product={product} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10 xl:mt-14 mx-2 sm:text-lg lg:text-xl xl:text-2xl">
        <p className="ml-6 bg-gingeralefizz w-min pt-1 px-4 font-bold rounded-t-3xl">
          Description
        </p>
        <div className="h h-32 bg-gingeralefizz py-4 px-6 rounded-2xl">
          {product.description}
        </div>
        <p className="mt-10 ml-6 bg-gingeralefizz w-min pt-1 px-9 font-bold rounded-t-3xl">
          Gallery
        </p>
        <div className=" h-32 bg-gingeralefizz py-4 px-6 rounded-2xl">
          Extra images go here
        </div>
      </div>
    </div>
  );
}
