"use client";

import Image from "next/image";
import React from "react";
import CartContext from "@/app/context/CartContext";
import { useContext } from "react";
import CheckUser from "./CheckUser";
import { Link } from "lucide-react";
import CartItems from "./CartItems";

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
        <CartItems
          cart={cart}
          deleteItemFromCart={deleteItemFromCart}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
}
