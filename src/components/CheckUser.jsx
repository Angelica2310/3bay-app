import { SignedIn } from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";
// import ViewCartCheckout from "./ViewCartCheckout";

export default async function CheckUser() {
  const { userId } = await auth();
  const responseUser = await db.query(
    `SELECT * FROM users WHERE clerk_id='${userId}'`
  );
  const numUser = responseUser.rowCount;
  return (
    <div>
      <SignedIn> {numUser === 1 ? <ViewCartCheckout /> : ""}</SignedIn>

      <SignedOut>
        <p className="p-5 text-red-600">
          Please{" "}
          <SignInButton>
            <button className="text-blue hover:underline hover:decoration-solid">
              Sign in
            </button>
          </SignInButton>
          to post a comment
        </p>
      </SignedOut>
    </div>
  );
}
