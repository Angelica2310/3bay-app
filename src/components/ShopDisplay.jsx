import { GetShopProducts } from "@/utils/actions";

export default async function ShopDisplay({ shop }) {
  const products = await GetShopProducts(shop.id);

  return (
    <div className="flex flex-col h-full w-full mx-6">
      <div className="my-10 flex flex-col items-center">
        <h2 className="text-4xl">{shop.name}</h2>
        <p className="pt-2 text-xl">{shop.description}</p>
      </div>
      {/* Render this if no products associated with shop  */}
      {!products && <p>No products yet...</p>}
      <div className="grid grid-flow-row sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 xl:grid-cols-4 xl:gap-4 bg-gray-600 py-4 my-20 text-white rounded-2xl">
        {/* Render this if only one associated product */}
        {!products[1] && (
          <div className="text-center text-lg">
            <p>[Image]</p>
            <h2>{products.name}</h2>
            {/* <p>Descrpition: {products.description}</p> */}
            <p>£{products.price}</p>
            {/* <p>Shipping {products.shipping}</p> */}
          </div>
        )}
        {/* Render this if multiple associated products */}
        {products[1] &&
          products.map((product) => {
            return (
              <div key={product.id} className="text-center text-xl px-1 py-4">
                <p>[Image]</p>
                <h2 className="py-1">{product.name}</h2>
                {/* <p>Description: {product.description}</p> */}
                <p>£{product.price}</p>
                {/* <p>Shipping: {product.shipping}</p> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}
