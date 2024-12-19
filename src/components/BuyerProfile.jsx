// This is the Buyer AND Seller profile page

import Link from "next/link";
import { db } from "@/utils/db";
import * as Form from "@radix-ui/react-form";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { revalidatePath } from "next/cache";

export default async function BuyerProfile({ user, shop }) {
  async function handleSubmit(formData) {
    "use server";
    const username = formData.get("username");
    const email = formData.get("email");
    console.log(username);

    await db.query(
      `UPDATE users
       SET username = $1, email = $2
       WHERE id = $3`,
      [username, email, user.id]
    );

    revalidatePath("/profile");
  }
  return (
    <div className="page-placement-style">
      <div>
        <SignedOut>
          <Link href="/sign-in" className="form-border-style">
            <strong>Please sign in to complete your profile </strong>
          </Link>
        </SignedOut>
      </div>
      <SignedIn>
        <div className="form-border-style">
          <Image
            width={96}
            height={96}
            src={user.image_url}
            alt="Profile Picture"
            className="rounded-full border-4 border-gray300"
          />
          <Form.Root action={handleSubmit}>
            <Form.Field name="username">
              <div>
                <Form.Label className="text-black">User Name:</Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  type="text"
                  defaultValue={user.username}
                  required
                  className="input-style"
                />
              </Form.Control>
            </Form.Field>
            <Form.Field name="email">
              <div>
                <Form.Label className="text-black">Email Address:</Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  type="text"
                  defaultValue={user.email}
                  required
                  className="input-style"
                />
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <button className="button-style">Submit </button>
            </Form.Submit>
          </Form.Root>

          <div>
            {user?.shop_id ? (
              <Link href={`/store/${user.shop_id}`}>
                <button className="button-style">My Store</button>
              </Link>
            ) : (
              <Link href="/store">
                <button className="button-style">Become a Seller</button>
              </Link>
            )}
          </div>

          <div className="w-full bg-white p-4 rounded-lg mt-6">
            <h2 className="text-lg font-semibold text-gray800">
              Recently Viewed Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Product 1"
                className="w-full h-auto border-2 border-gray300"
              />
            </div>
          </div>
        </div>
      </SignedIn>
    </div>
  );
}
