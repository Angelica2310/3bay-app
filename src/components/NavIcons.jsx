"use client";

import { ShoppingCart, UserRoundPen } from "lucide-react";

export default function NavIcons() {
  return (
    <div className="flex gap-3 items-center xl:gap-5 cursor-pointer">
      <UserRoundPen />
      <ShoppingCart />
    </div>
  );
}
