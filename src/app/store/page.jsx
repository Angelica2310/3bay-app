import CreateShopForm from "@/components/CreateShopForm";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function SellerStorePage() {
  return (
    <div className="flex justify-center items-center h-full">
      <SignedIn>
        {/* TODO: Add bool to check if seller already has a store in the database */}
        {/* If logged in user's id does not exist in shop database, render the shop creation form */}
        <CreateShopForm />
        {/* If user's id does exists in the shop database then user already has a shop setup, in which case display the shop. */}
        {/* Placeholder for seller's shop display component */}
      </SignedIn>
      <SignedOut>
        <p>You must be logged in to view your store page!</p>
        <Link href="/sign-in">Sign In</Link>
      </SignedOut>
    </div>
  );
}
