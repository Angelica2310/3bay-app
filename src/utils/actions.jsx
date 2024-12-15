import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/db";

// Returns user object if user exists, otherwise returns undefined. Optional argument to pass a clerk_id, else it defaults to check currently logged in user.
export async function GetUser(clerk_id) {
  const id = clerk_id || (await auth()).userId;
  const response = await db.query(`SELECT * FROM users WHERE clerk_id = $1`, [
    id,
  ]);
  const result = await response.rows[0];

  return result;
}

export async function CheckForUser() {
  // Get logged in user's clerk info
  const user = (await auth()).sessionClaims;
  const { id, email, image, username } = await user;

  // Check if user is registered in database
  const exists = await GetUser(id);

  // Add to database if not already existing, providing default values from clerk
  if (!exists) {
    db.query(
      `INSERT INTO users (username, email, image_url, clerk_id) VALUES ($1, $2, $3, $4)`,
      [username, email, image, id]
    );
  }
  return user;
}

// Retrieves shop from db via a userId passed as arg
export async function GetShopByUserId(id) {
  const response = await db.query(`SELECT * FROM shops WHERE user_id = ${id}`);
  const shop = await response.rows[0];
  return shop;
}

// Retrieves products associated with a shop from db via  shopId passed as arg
export async function GetShopProducts(shopId) {
  const response = await db.query(
    `SELECT * FROM products WHERE shop_id = ${shopId}`
  );
  const products = await response.rows;

  if (response.rowCount === 0) {
    return null;
  } else if (response.rowCount === 1) {
    return await response.rows[0];
  } else {
    return products;
  }
}