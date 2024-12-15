import ShopDisplay from "@/components/ShopDisplay";
import { db } from "@/utils/db";

export default async function IndividualStorePage({ params }) {
  const id = (await params).id;
  const response = await db.query(`SELECT * FROM shops WHERE id = ${id}`);
  const shop = await response.rows[0];

  return (
    <div>
      <ShopDisplay shop={shop} />
    </div>
  );
}
