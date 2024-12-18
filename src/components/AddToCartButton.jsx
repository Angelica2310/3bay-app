"use client";

import CartContext from "@/app/context/CartContext";
import { useContext } from "react";

export default function AddToCartButton({ product }) {
  const { addItemToCart } = useContext(CartContext);

  // console.log("product", product);

  const addToCartHandler = () => {
    addItemToCart({
      product: product.id,
      name: product.name,
      price: product.price,
      image: product.images_url,
      description: product.description,
      shipping: product.shipping,
    });
  };
  //   console.log("---show product---", product);
  return (
    <button className="cart-button" onClick={() => addToCartHandler()}>
      Add to cart
    </button>
  );
}
