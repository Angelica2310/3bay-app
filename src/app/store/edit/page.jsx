import CreateShopForm from "@/components/CreateShopForm";
import { GetShopByUserId, GetUser } from "@/utils/actions";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function EditStorePage() {
  const user = await GetUser();
  if (!user) {
    redirect("/sign-up");
  }
  let userId = await user.id;
  const shop = await GetShopByUserId(userId);
  return (
    <div className="flex flex-col justify-center items-center h-full">
      {shop ? <CreateShopForm shop={shop} /> : <CreateShopForm />}
      <div className="mt-6">
        <Link
          href="/store"
          className="font-semibold hover:text-white hover:underline"
        >
          Back to Store Page
        </Link>
      </div>
    </div>
  );
}
