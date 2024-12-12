import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

export default function NavBar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-20 px-4 flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">3Bay</div>
        </Link>
        <Menu />
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" width={50} height={50} alt="logo" />
            <div className="text-2xl tracking-wide">3Bay</div>
          </Link>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
