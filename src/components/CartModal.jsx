"use client";

import Image from "next/image";
import React from "react";
import CartContext from "@/app/context/CartContext";
import { useContext } from "react";

export default function CartModal() {
  const cartItems = true;

  const { addItemToCart, cart, deleteItemFromCart } = useContext(CartContext);

  const totalPrice = cart?.cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.price * (cartItem.quantity || 1);
  }, 0);

  return (
    <div className="w-max p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20 fixed">
      {!cartItems ? (
        <div>Cart is empty</div>
      ) : (
        <div>
          <h2 className="text-xl text-stormygreen">Shopping Cart</h2>
          {/* // CART ITEMS */}
          {cart?.cartItems.map((cartItem, index) => {
            // console.log("cartItem", cartItem);
            return (
              <div className="flex flex-col gap-8" key={index}>
                {/* ITEM */}
                <div className="flex gap-4">
                  <Image
                    src={cartItem.image}
                    alt={cartItem.name}
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                  <div className="flex flex-col justify-between w-full">
                    {/* TOP */}
                    <div>
                      {/* TITLE */}
                      <div className="flex items-center justify-between gap-8">
                        <h3 className="font-semibold text-bratwurst">
                          {cartItem.name}
                        </h3>
                        <div className="p-1 text-bratwurst rounded-sm flex items-center gap-2">
                          £{cartItem.price}
                        </div>
                      </div>
                      {/* DESC */}
                      <div className="text-sm text-gray-500">available</div>
                    </div>
                    {/* BOTTOM */}
                    <div className="flex justify-between text-sm">
                      {/* <span className="text-gray-500">Qty: 1</span> */}
                      <button
                        className="text-blue-500"
                        onClick={() => deleteItemFromCart(cartItem?.product)}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* // BOTTOM */}
          <div>
            <div className="flex items-center justify-between font-semibold text-bratwurst">
              <span>Subtotal: </span>
              <span>£{totalPrice}</span>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-4">
              Shipping is calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-bratwurst text-bratwurst">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-bratwurst text-white">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
