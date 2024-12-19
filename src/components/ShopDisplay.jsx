import { GetShopProducts } from "@/utils/actions";
import * as Dialog from "@radix-ui/react-dialog";
import AddProductBtn from "./AddProductBtn";
import Product from "./Product";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function ShopDisplay({ shop, ownShop }) {
  const products = await GetShopProducts(shop.id);

  return (
    <div
      className={`bg-color-${shop.theme} bg-color-card-${shop.theme} flex flex-col h-full w-full  items-center `}
    >
      <h3
        className={`bg-color-card-${shop.theme} text-color-text-${shop.theme} mt-10 px-6 py-2 rounded-t-3xl text-2xl pb-1 font-bold`}
      >
        My Shop
      </h3>
      <div
        className={`bg-color-card-${shop.theme} text-color-text-${shop.theme} mb-10 flex flex-col items-center w-4/5 py-4 px-4 rounded-3xl`}
      >
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-center">
          {shop.name}
        </h2>

        <p className="py-4 text-xl text-justify">{shop.description}</p>
        <div className="flex flex-col sm:flex-row mt-2 mb-4">
          {ownShop && <AddProductBtn shopId={shop.id} />}
          {ownShop && (
            <Link
              href="/store/edit"
              className="py-1 px-3 mt-6 sm:mt-0 sm:ml-10 text-lg rounded-xl bg-prismarine  text-white shadow-[0_2px_10px] shadow-black hover:bg-benihired hover:text-white focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none text-center pl-5 pr-5"
            >
              Edit Shop
            </Link>
          )}
        </div>
      </div>
      {/* Render this if no products associated with shop  */}
      {!products ? (
        <p>No products yet...</p>
      ) : (
        <div className="mt-12 mb-6 flex flex-col items-center md:flex-row gap-x-8 gap-y-16 justify-between flex-wrap">
          {/* old styling of above div "grid grid-flow-row sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 xl:grid-cols-4 xl:gap-4 bg-gray600 py-4 my-20 text-white rounded-2xl"*/}
          {!products[1] ? (
            <Product product={products} ownShop={ownShop} />
          ) : (
            products.map((product) => {
              return (
                <Product product={product} key={product.id} ownShop={ownShop} />
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
