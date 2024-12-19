import Link from "next/link";
import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

export default function NavBar() {
  return (
    <div className="header">
      {/* MOBILE */}
      <div className="h-20 px-4 flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">3Bay</div>
        </Link>
        <NavIcons />
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" width={50} height={50} alt="logo" />
            <div className="text-2xl tracking-wide">&nbsp;3Bay</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Homepage</Link>
            <Link href="/browse">Browse</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
