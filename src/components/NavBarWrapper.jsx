"use client";
//a wrapper for navBar so it can have conditional client rendering need to be added around navbar in layout.js

import { useEffect, useRef, useState } from "react";

export default function NavBarWrapper({ children }) {
  const [visible, setVisible] = useState(true);
  const scrollState = useRef(0);

  function handleScroll(event) {
    const { scrollY } = window;

    console.log("math ", scrollState.current - scrollY);
    console.log("math.sign ", Math.sign(scrollState.current - scrollY));
    console.log(typeof visible);
    console.log(
      "if conditional",
      Math.sign(scrollState.current - scrollY) === -1
    );
    if (Math.sign(scrollState.current - scrollY) === -1) {
      scrollState.current = scrollY;
      if (visible === true) {
        console.log("set to false");
        setVisible(false);
      }
    } else if (Math.sign(scrollState.current - scrollY) === 1) {
      scrollState.current = scrollY;
      if (visible === false) {
        console.log("set to true");
        setVisible(true);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);
  return (
    <div
      onScroll={handleScroll}
      className={
        visible === true
          ? "header transition-opacity duration-700 opacity-100"
          : "header transition-opacity duration-700 opacity-0"
      }
    >
      {children}
    </div>
  );
}
