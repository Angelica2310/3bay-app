"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MenuPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        setOpen(false);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <div className="cursor-pointer">
      <Menu onClick={() => setOpen((prev) => !prev)} />
      {open && (
        <div className="absolute bg-stormygreen text-white left-0 top-15 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Homepage</Link>
          <Link href="/browse">Browse</Link>
          <Link href="/signout">Logout</Link>
          <Link href="/cart">Cart</Link>
        </div>
      )}
    </div>
  );
}
