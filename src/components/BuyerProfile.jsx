// This is the BUYER profile page
// links to Search Page - CHANGE TO CORRECT PATH BELOW

import Link from "next/link";
import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import * as Form from "@radix-ui/react-form";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default async function BuyerProfile() {
  const { userId } = await auth();

  // Fetching the signed-in users details
  const responseUsers = await db.query(`
    SELECT 
    users.username,
    users.image_url,
    users.email,
    users.id as user_id
    FROM users WHERE users.clerk_id = '${userId}'
          `);
  const users = responseUsers.rows;

  // check user is in the db
  const responseUser = await db.query(
    `SELECT * FROM users WHERE clerk_id = '${userId}'`
  );
  const numUsers = responseUser.rowCount;

  async function handleSubmit(formData) {
    "use server";
    const username = formData.get("username");
    const email = formData.get("email");
    //console.log(username);

    db.query(
      `INSERT INTO users (username, email, clerk_id) VALUES ($1, $2, $3)`,
      [username, email, userId]
    );

    //revalidatePath("/");
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
          <img
            src="https://via.placeholder.com/150"
            alt="Profile pic from"
            className="w-24 h-24 rounded-full border-4 border-gray-300"
          />
          <div>
            {users.map((user) => {
              return <ul key={user.id}>{user.image_url}</ul>;
            })}
          </div>
          <Form.Root action={handleSubmit}>
            <Form.Field name="username">
              <div>
                {users.map((user) => {
                  return <ul key={user.id}>{user.username}</ul>;
                })}
                <Form.Label className="text-black">User Name:</Form.Label>
              </div>
              <Form.Control asChild>
                <input type="text" required className="input-style" />
              </Form.Control>
            </Form.Field>
            <Form.Field name="email">
              <div>
                {users.map((user) => {
                  return <ul key={user.id}>{user.email}</ul>;
                })}
                <Form.Label className="text-black">Email Address:</Form.Label>
              </div>
              <Form.Control asChild>
                <input type="text" required className="input-style" />
              </Form.Control>
            </Form.Field>
          </Form.Root>
          <Link href="/products">
            <button className="button-style">Submit</button>
          </Link>
          <div>
            <Link href="/">
              <button className="button-style">Become a Seller</button>
            </Link>
          </div>

          <div className="w-full bg-white p-4 rounded-lg mt-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Recently Viewed Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Product 1"
                className="w-full h-auto border-2 border-gray-300"
              />
            </div>
          </div>
        </div>
      </SignedIn>
    </div>
  );
}
