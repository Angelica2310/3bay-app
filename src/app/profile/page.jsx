// This is the profile page

import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import BuyerProfile from "@/components/BuyerProfile";
import SellerProfile from "@/components/SellerProfile";

export default async function ProfilePage() {
  const { userId } = await auth();

  // Check if the user exists in the database and if they are a seller
  // const response = await db.query(
  //   `SELECT * users, shops.id AS shop_id
  //    FROM users
  //    LEFT JOIN shops ON users.id = shops.user_id
  //    WHERE users.clerk_id = $1`,
  //   [userId]
  // );
  // console.log(response);

  // get the result
  //const user = response.rows[0];
  // identify if user is seller (on shop_id)
  //const userIsSeller = user && user.shop_id;

  // show the relevant component
  // if user is seller = SellerProfile, otherwise show BuyerProfile

  // <div>{userIsSeller ? <SellerProfile /> : <BuyerProfile />}</div>;

  return <div>Profile page - Liz's WIP</div>;
}
