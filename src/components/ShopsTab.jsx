import { db } from "@/utils/db";
import React from "react";
import ShopComponent from "./ShopComponent";

export default async function ShopsTab() {
  const shops = (await db.query("SELECT * FROM shops")).rows;
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="h-[100%] w-[100%] my-12 flex gap-x-8 gap-y-16 justify-between flex-wrap ">
        {shops.map((shop) => {
          return <ShopComponent shop={shop} key={shop.id} />;
        })}
      </div>
    </div>
  );
}
