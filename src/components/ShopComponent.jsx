import Image from "next/image";
import Link from "next/link";

export default function ShopComponent({ shop }) {
  return (
    //delivery type icon
    //name
    //truncated description
    //address
    //

    <Link
      href={`/store/${shop.id}`}
      className="bg-gray200 rounded-lg w-60 h-60 p-2"
    >
      <div className="flex flex-col text-center h-48">
        <p className="text-lg font-semibold">{shop.name}</p>
        <p className="h-40 overflow-hidden">{shop.description}</p>
      </div>
      <div className="flex justify-around">
        <p>{shop.address}</p>
        {(shop.delivery_type = "delivery") ? (
          <Image
            src="/express-delivery.png"
            alt={shop.delivery_type}
            width={25}
            height={25}
          />
        ) : (
          <Image
            src="/car.png"
            alt={shop.delivery_type}
            width={25}
            height={25}
          />
        )}
      </div>
    </Link>
  );
}
