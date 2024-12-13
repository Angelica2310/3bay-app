import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

// Returns user object if user exists, otherwise returns undefined
export async function GetUser(clerk_id) {
  const response = await db.query(`SELECT * FROM users WHERE clerk_id = $1`, [
    clerk_id,
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
    return user;
  }
  return user;
}
