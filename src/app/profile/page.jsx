// This is the profile page

import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import BuyerProfile from "@/components/BuyerProfile";
import { CheckForUser } from "@/utils/actions";

export default async function ProfilePage() {
  const { userId } = await auth();

  // Checks if user exists in db and add to db if not. Returns user obj with id, username, email, image
  CheckForUser();

  // Check if the user exists in the database and if they are a seller
  const response = await db.query(
    `SELECT users.*, shops.id AS shop_id
   FROM users
   LEFT JOIN shops ON users.id = shops.user_id
   WHERE users.clerk_id = $1`,
    [userId]
  );
  // console.log(response);

  // get the result
  const user = response.rows[0];

  return (
    <div>
      <BuyerProfile user={user} />
    </div>
  );
}
