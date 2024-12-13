"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MenuPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="cursor-pointer ">
      <Menu onClick={() => setOpen((prev) => !prev)} />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Homepage</Link>
          <Link href="/products">Products</Link>
          <Link href="/signout">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
}
