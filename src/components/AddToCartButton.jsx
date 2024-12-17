"use client";

import CartContext from "@/app/context/CartContext";
import { useContext } from "react";

export default function addToCartButton({ product }) {
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemToCart({
      product: product.id,
      name: product.name,
      price: product.price,
      image: product.images_url,
    });
  };
  //   console.log("---show product---", product);
  return (
    <button className="cart-button" onClick={() => addToCartHandler()}>
      Add to cart
    </button>
  );
}
