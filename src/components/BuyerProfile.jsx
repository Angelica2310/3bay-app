// This is the BUYER profile page
// links to Search Page - CHANGE TO CORRECT PATH BELOW

import Link from "next/link";
import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function BuyerProfile() {
  const { userId } = await auth();

  async function handleSubmit(formData) {
    "use server";
    const username = formData.get("username");
    const email = formData.get("email");
    //console.log(username);

    db.query(
      `INSERT INTO users (username, email, clerk_id) VALUES ($1, $2, $3)`,
      [username, email, userId]
    );

    revalidatePath("/");
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div
        className="flex flex-col items-center space-y-6 bg-white p-8 max-w-2xl rounded-md shadow-lg
    "
      >
        <img
          src="https://via.placeholder.com/150"
          alt="Profile pic"
          className="w-24 h-24 rounded-full border-4 border-gray-300"
        />
        <input
          type="user_name"
          placeholder="user name"
          className="input-style"
        ></input>

        <input
          type="email"
          placeholder="email address"
          className="input-style"
        ></input>

        <button className="submit-style">Submit</button>

        <div>
          <Link href="/">
            <button className="button-style">Become a Seller</button>
          </Link>
        </div>

        <div className="w-full bg-gray-200 p-4 rounded-lg mt-6">
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
    </div>
  );
}
