import Link from "next/link";
import React from "react";

export default function CheckOutButton() {
  return (
    <Link href="/checkout">
      <div className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-white bg-bratwurst shadow-sm border border-gray200 rounded-md cursor-pointer">
        Checkout
      </div>
    </Link>
  );
}
