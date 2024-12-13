import CreateShopForm from "@/components/CreateShopForm";
import ShopDisplay from "@/components/ShopDisplay";
import { GetUser, GetShopByUserId } from "@/utils/actions";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function SellerStorePage() {

  const user = await GetUser();
  const shop = await GetShopByUserId(user.id);

  // console.log(shop, typeof shop);

  return (
    <div className="flex justify-center items-center h-full">
      <SignedIn>
        {/* If logged in user's id does not exist in shop database, render the shop creation form */}
        {!shop && <CreateShopForm />}
        {/* If user's id does exists in the shop database then user already has a shop setup, in which case display the shop. */}
        {shop && <ShopDisplay shop={shop} />}
      </SignedIn>
      <SignedOut>
        <p>You must be logged in to view your store page!</p>
        <Link href="/sign-in">Sign In</Link>
      </SignedOut>
    </div>
  );
}
