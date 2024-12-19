"use client";

import React, { useEffect, useContext, useState } from "react";
import CartContext from "@/app/context/CartContext";
import CartItems from "./CartItems";

export default function CartModal() {
  const { addItemToCart, cart, deleteItemFromCart } = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(true);

  const totalPrice = cart?.cartItems?.reduce((acc, cartItem) => {
    return acc + cartItem.price * (cartItem.quantity || 1);
  }, 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="w-max p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20 fixed">
      {!cart.cartItems ? (
        <p className="text-black">Cart is empty</p>
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
