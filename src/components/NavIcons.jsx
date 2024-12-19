"use client";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { ShoppingCart, UserRoundPen } from "lucide-react";
import Link from "next/link";
import { useState, useContext } from "react";
import CartModal from "./CartModal";
import CartContext from "@/app/context/CartContext";
import CstmUserBtn from "./CstmUserBtn";
import MenuPage from "./Menu";

export default function NavIcons() {
  const [cartOpen, setCartOpen] = useState(false);

  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;

  return (
    <div className="flex gap-3 items-center xl:gap-5 cursor-pointer relative">
      <div className="xl:hidden md:visible flex justify-center">
        <MenuPage />
      </div>
      <SignedOut>
        <SignInButton>
          <Link href="/sign-in">
            <UserRoundPen />
          </Link>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <CstmUserBtn />
      </SignedIn>
      <div className="relative cursor-pointer">
        <ShoppingCart onClick={() => setCartOpen((prev) => !prev)} />
        <div className="absolute -top-2.5 -right-3.5 w-[22px] h-[22px] bg-red600 rounded-full text-white text-sm flex items-center justify-center">
          {cartItems?.length || 0}
        </div>
      </div>
      {cartOpen && <CartModal />}
    </div>
  );
}
