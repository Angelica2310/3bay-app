import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="h-screen w-screen  flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-white">
        <div className="max-w-md">
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.{" "}
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link href="/">
            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-bratwurst active:bg-bratwurst hover:bg-white hover:text-bratwurst">
              back to homepage
            </button>
          </Link>
        </div>
        <div className="max-w-lg">
          <Image src="/errorpage.png" alt="404" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
