import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import ShopsTab from "@/components/ShopsTab";
import ProductsTab from "@/components/ProductsTab";
import SearchBar from "@/components/SearchBar";
import Revalidate from "@/components/Revalidate";

export const metadata = {
  title: "3Bay | Browse",
  description: "Where you can browse all products and shops on 3Bay.",
};

export default function browsePage() {
  return (
    <main>
      <div className="mt-12 w-[80vw] ml-[4vw]">
        <SearchBar />
        <p className="pt-2">Viewing all results</p>
      </div>
      <div className="flex justify-center py-8">
        <Tabs.Root
          className="w-[92vw]  bg-white rounded-[14px]"
          defaultValue="tab1"
        >
          <Tabs.List className="flex" aria-label="browse products or shops">
            <Tabs.Trigger
              value="tab1"
              className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
            >
              Products
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab2"
              className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
            >
              Shops
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">
            <ProductsTab />
          </Tabs.Content>
          <Tabs.Content value="tab2" className="">
            <ShopsTab />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </main>
  );
}
