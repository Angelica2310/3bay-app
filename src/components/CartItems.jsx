import Image from "next/image";
import Link from "next/link";

export default function CartItems({ cart, deleteItemFromCart, totalPrice }) {
  return (
    <div>
      <h2 className="text-xl text-stormygreen">Shopping Cart</h2>
      {/* // CART ITEMS */}
      {cart?.cartItems.map((cartItem, index) => {
        // console.log("cartItem", cartItem);
        return (
          <div className="flex flex-col gap-8" key={`cart-${cartItem.name}`}>
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src={cartItem.image}
                alt={cartItem.name}
                width={64}
                height={55}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold text-bratwurst">
                      {cartItem.name}
                    </h3>
                    <div className="p-1 text-bratwurst rounded-sm flex items-center gap-2">
                      £{cartItem.price}
                    </div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  {/* <span className="text-gray-500">Qty: 1</span> */}
                  <button
                    className="text-blue-500"
                    onClick={() => deleteItemFromCart(cartItem?.product)}
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* // BOTTOM */}
      <div>
        <div className="flex items-center justify-between font-semibold text-bratwurst">
          <span>Subtotal: </span>
          <span>£{totalPrice}</span>
        </div>
        <p className="text-sm mt-2 text-gray-500 mb-4">
          Shipping is calculated at checkout
        </p>
        <Link
          href="/cart"
          className="rounded-md py-3 px-4 ring-1 ring-bratwurst text-bratwurst"
        >
          View Cart
        </Link>
      </div>
    </div>
  );
}