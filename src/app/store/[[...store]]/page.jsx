import CreateShopForm from "@/components/CreateShopForm";
import ShopDisplay from "@/components/ShopDisplay";
import { GetUser, GetShopByUserId, GetShopById } from "@/utils/actions";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

export default async function StorePage({ params }) {
  const param = (await params).store || undefined;
  let shop = "";
  const user = await GetUser();
  let ownShop = false;

  // If no param in url (eg just /store) and user is logged in then get user's own shop
  if (!param && user) {
    shop = await GetShopByUserId(user.id);

    // Redirect if trying to access /store while not logged in
  } else if (!param && !user) {
    redirect("/products");
  } else {
    shop = await GetShopById(param[0]);
  }

  if (shop) {
    // If shop exists and is owned by current user, set ownShop bool to true
    if (shop.user_id === user.id) {
      ownShop = true;
    }
  }

  // If user isn't logged in and a shop wasn't found, or if a shop wasn't found when an id was passed as a search param, then call notFound
  if ((!shop && !user) || (!shop && param)) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center h-full">
      <SignedIn>
        {/* If logged in user's id does not exist in shop database, render the shop creation form */}
        {!param ? !shop && <CreateShopForm /> : <></>}
      </SignedIn>
      {/* If shop was found, display the shop */}
      {shop && <ShopDisplay shop={shop} ownShop={ownShop} />}
      <SignedOut>
        {/* If not logged in and trying to access /store without any params then render this message */}
        {!param && (
          <div>
            <p>You must be logged in to view your store page!</p>
            <Link href="/sign-in">Sign In</Link>
          </div>
        )}
      </SignedOut>
    </div>
  );
}
