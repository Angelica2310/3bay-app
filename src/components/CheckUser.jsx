import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import CheckOutButton from "./CheckOutButton";
import { db } from "@/utils/db";

export default async function CheckUser() {
  const { userId } = await auth();
  const responseUser = await db.query(
    `SELECT * FROM users WHERE clerk_id='${userId}'`
  );
  const numUser = responseUser.rowCount;
  return (
    <div>
      <SignedIn> {numUser === 1 ? <CheckOutButton /> : ""}</SignedIn>

      <SignedOut>
        <SignInButton>
          <div className="px-4 py-3 inline-block text-sm w-full text-center font-medium text-white bg-bratwurst shadow-sm border border-gray-200 rounded-md cursor-pointer">
            Please sign in to check out
          </div>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
