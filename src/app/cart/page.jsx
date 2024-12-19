import Cart from "@/components/Cart";
import CheckUser from "@/components/CheckUser";
import React from "react";

export const metadata = {
  title: "3Bay | Cart",
  description:
    "Where you can view all items in your cart and proceed to checkout.",
};

export default function CartPage() {
  return (
    <Cart>
      <CheckUser />
    </Cart>
  );
}
