"use client";

import Image from "next/image";
import React from "react";
import CartContext from "@/app/context/CartContext";
import { useContext } from "react";
import Link from "next/link";
// import CheckUser from "./CheckUser";

export default function Cart({ children }) {
  const cartItems = true;

  const { addItemToCart, cart, deleteItemFromCart } = useContext(CartContext);

  // console.log("cart", cart);

  const totalPriceWithoutShipping = cart?.cartItems?.reduce((acc, cartItem) => {
    return acc + cartItem.price * (cartItem.quantity || 1);
  }, 0);

  const totalShipping = cart?.cartItems?.reduce((acc, cartItem) => {
    return acc + cartItem.shipping * (cartItem.quantity || 1);
  }, 0);

  const totalAmount = totalPriceWithoutShipping + totalShipping;

  // console.log("totalAmount", totalAmount);
  return (
    <>
      <section className="py-5 sm:py-7 bg-blue-100">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-2">
            {cart?.cartItems?.length || 0} Item(s) in Cart
          </h2>
        </div>
      </section>
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* MAIN CART */}
            <main className="md:w-3/4">
              <div className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                {cart?.cartItems?.map((cartItem, index) => {
                  return (
                    <div key={index}>
                      <div className="flex lg:flex-row gap-5 mb-4 md:flex-row justify-between ">
                        {/* IMAGE, NAME, DESC */}
                        <div className="w-full md:w-full flex flex-col gap-8">
                          <div className="flex leading-5">
                            <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                              <Image
                                src={`https://11mn4if8mi.execute-api.eu-west-2.amazonaws.com/dev/3bay-files/${cartItem.image}`}
                                alt={cartItem.name}
                                width={64}
                                height={64}
                              />
                            </div>
                            <div className="ml-3">
                              <p>{cartItem.name}</p>
                              <div className="text-gray-400">
                                {" "}
                                {cartItem.description}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* PRICE, SHIPPING, REMOVE BTN */}
                        <div className="flex gap-8 w-full justify-end md:flex-row">
                          <div className="">
                            <div>Price: £{cartItem.price}</div>
                            <small className="text-gray-400">
                              shipping: £{cartItem.shipping}
                            </small>
                          </div>
                          <div className="">
                            {/* <div className="float-right"> */}
                            <button
                              className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                              onClick={() =>
                                deleteItemFromCart(cartItem?.product)
                              }
                            >
                              Remove
                            </button>
                            {/* </div> */}
                          </div>
                        </div>
                      </div>

                      <hr className="my-4" />
                    </div>
                  );
                })}
              </div>
            </main>
            {/* SUBTOTAL */}
            <div className="md:w-1/4">
              <div className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <div className="mb-5">
                  <small className="flex justify-between text-gray-600  mb-1">
                    <span>Total without shipping:</span>
                    <span>£{(totalPriceWithoutShipping || 0).toFixed(2)}</span>
                  </small>

                  <small className="flex justify-between text-gray-600  mb-1">
                    <span>Shipping:</span>
                    <span>£{(totalShipping || 0).toFixed(2)}</span>
                  </small>
                  <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                    <span>Subtotal:</span>
                    <span>£{(totalAmount || 0).toFixed(2)}</span>
                  </li>
                </div>
                <div>{children}</div>

                <Link
                  href="/products"
                  className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-bratwurst bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                >
                  Back to products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
