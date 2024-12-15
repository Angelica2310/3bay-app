import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {

  const paymentImages = [
    { src: "/applepay.png", alt: "Apple Pay" },
    { src: "/paypal.png", alt: "PayPal" },
    { src: "/mastercard.png", alt: "MasterCard" },
    { src: "/visa.png", alt: "Visa" },
  ];

  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">3Bay</div>
          </Link>
          <p>123 Main Street, Hull HU1 23AB, United Kingdom</p>
          <span className="font-semibold">hello@3bay.co.uk</span>
          <span className="font-semibold">+44 234 567 890</span>
          <div className="flex gap-6">
            <Facebook />
            <Instagram />
            <Youtube />
            <Twitter />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/3">
          <div className="flex flex-col ">
            <h1 className="font-medium text-lg mb-12">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Home Page</Link>
              <Link href="/about">About Us</Link>
              <Link href="/products">Products</Link>
              <Link href="/stores">Stores</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 outline-none"
            />
            <button className="w-1/4 bg-sky-600 text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            {paymentImages.map(
              (image, index) =>
                image.src && (
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width={40}
                    height={20}
                  />
                )
            )}
          </div>
        </div>
        {/* BOTTOM */}
      </div>
    </div>
  );

}
