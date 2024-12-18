"use client";

import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useContext } from "react";
import CartContext from "@/app/context/CartContext";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function CheckOut() {
  const { addItemToCart, cart } = useContext(CartContext);

  const totalPriceWithoutShipping =
    cart?.cartItems?.reduce((acc, cartItem) => {
      const itemPrice = cartItem.price || 0;
      const itemQuantity = cartItem.quantity || 1;
      return acc + itemPrice * itemQuantity;
    }, 0) || 0;

  const totalShipping =
    cart?.cartItems?.reduce((acc, cartItem) => {
      const itemShipping = cartItem.shipping || 0;
      const itemQuantity = cartItem.quantity || 1;
      return acc + itemShipping * itemQuantity;
    }, 0) || 0;

  const totalAmount = totalPriceWithoutShipping + totalShipping;

  //   console.log("totalAmount", totalAmount);

  //   console.log("Cart:", cart);
  //   console.log("Cart Items:", cart?.cartItems);

  return (
    <main className="max-w-6xl mx-auto p-10 text-bratwurst text-center border m-10 rounded-md bg-gingeralefizz">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2"></h1>
        <h2 className="text-2xl">
          <p>Total Amount to pay: £{(totalAmount || 0).toFixed(2)}</p>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(totalAmount),
          currency: "gbp",
        }}
      >
        <CheckOutForm totalAmount={totalAmount} />
      </Elements>
    </main>
  );
}
