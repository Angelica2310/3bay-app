import { GetShopById } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";

export default function ShopComponent({ shopId }) {
  const shop = GetShopById(shopId);
  return (
    //delivery type icon
    //name
    //truncated description
    //address
    //
    <Link href={`/store/${shop.id}`} className="bg-white rounded-xl">
      <div className="flex flex-col text-center">
        <p>{shop.name}</p>
        <p>{shop.description}</p>
      </div>
      <div className="flex justify-between">
        <p>{shop.address}</p>
        <Image alt={shop.delivery_type} />
      </div>
    </Link>
  );
}
