import { GetShopProducts } from "@/utils/actions";
import * as Dialog from "@radix-ui/react-dialog";
import AddProductBtn from "./AddProductBtn";
import Product from "./Product";

export default async function ShopDisplay({ shop }) {
  const products = await GetShopProducts(shop.id);

  return (
    <div className="flex flex-col h-full w-full mx-6">
      <div className="my-10 flex flex-col items-center">
        <h2 className="text-4xl">{shop.name}</h2>
        <p className="pt-2 text-xl">{shop.description}</p>
        <AddProductBtn shopId={shop.id} />
      </div>
      {/* Render this if no products associated with shop  */}
      {!products ? (
        <p>No products yet...</p>
      ) : (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
          {/* old styling of above div "grid grid-flow-row sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 xl:grid-cols-4 xl:gap-4 bg-gray-600 py-4 my-20 text-white rounded-2xl"*/}
          {!products[1] ? (
            <Product product={products} />
          ) : (
            products.map((product) => {
              return <Product product={product} key={product.id} />;
            })
          )}
        </div>
      )}
    </div>
  );
}
