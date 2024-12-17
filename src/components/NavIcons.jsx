"use client";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { ShoppingCart, UserRoundPen } from "lucide-react";
import Link from "next/link";
import { useState, useContext } from "react";
import CartModal from "./CartModal";
import CartContext from "@/app/context/CartContext";

export default function NavIcons() {
  const [cartOpen, setCartOpen] = useState(false);

  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;

  return (
    <div className="flex gap-3 items-center xl:gap-5 cursor-pointer relative">
      <SignedOut>
        <SignInButton>
          <Link href="/sign-in">
            <UserRoundPen />
          </Link>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <Link href="/user"></Link>
        <UserButton />
      </SignedIn>
      <div className="relative cursor-pointer">
        <ShoppingCart onClick={() => setCartOpen((prev) => !prev)} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-red-500 rounded-full text-white text-sm flex items-center justify-center">
          {cartItems?.length || 0}
        </div>
      </div>
      {cartOpen && <CartModal />}
    </div>
  );
}
