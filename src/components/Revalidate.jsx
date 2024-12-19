"use client";

import { revalidatePath } from "next/cache";
import React, { useEffect } from "react";

export default function Revalidate(path) {
  useEffect(() => {
    revalidatePath(`/${path}`);
  }, []);

  return <div></div>;
}
