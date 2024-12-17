import { GetUser } from "@/utils/actions";
import { db } from "@/utils/db";
import * as Form from "@radix-ui/react-form";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function handleAddShop(formData) {
  "use server";
  const userId = (await GetUser()).id;
  const name = formData.get("name");
  const desc = formData.get("description");
  const city = formData.get("city");
  const shipping = formData.get("shipping");
  const theme = formData.get("theme");
  await db.query(
    `INSERT INTO shops (name, description, address, delivery_type, theme, user_id) VALUES ($1, $2, $3, $4, $5, $6)`,
    [name, desc, city, shipping, theme, userId]
  );
  revalidatePath("/store");
}

async function handleUpdateShop(formData) {
  "use server";
  const obj = Object.fromEntries(formData.entries());
  const { name, description, city, shipping, theme, shopId } = obj;
  console.log("name is: ", name, "shipping is: ", shipping);
  await db.query(
    `UPDATE shops SET name = $1, description = $2, address = $3, delivery_type = $4, theme = $5 WHERE id = $6`,
    [name, description, city, shipping, theme, shopId]
  );
  revalidatePath("/store");
  redirect("/store");
}

export default function CreateShopForm({ shop }) {
  return (
    <div>
      <h3 className="text-center mt-6 text-2xl pb-1 font-semibold">
        {shop ? (
          <span className="bg-gingeralefizz px-6 py-3 rounded-t-3xl">
            Edit Store
          </span>
        ) : (
          <span className="bg-gingeralefizz px-6 py-3 rounded-t-3xl">
            Create Store
          </span>
        )}
      </h3>
      <Form.Root
        className="w-[340px] sm:w-[400px] md:w-[600px] xl:w-[900px] bg-gingeralefizz py-4 px-4 rounded-3xl"
        action={shop ? handleUpdateShop : handleAddShop}
        // action={handleAddShop}
      >
        <Form.Field className="mb-2.5 grid" name="name">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] xl:text-[20px] font-semibold leading-[35px]">
              Shop Name
            </Form.Label>
            <Form.Message
              className="text-[13px] xl:text-[16px] opacity-80"
              match="valueMissing"
            >
              Please enter a shop name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded px-2.5 text-[15px] xl:text-[18px] leading-none shadow-[0_0_0_1px] shadow-black outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              defaultValue={shop && shop.name}
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="description">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] xl:text-[20px] font-semibold leading-[35px]">
              Shop Description
            </Form.Label>
            <Form.Message
              className="text-[13px] xl:text-[16px] opacity-80"
              match="valueMissing"
            >
              Please enter a description
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea
              className="box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded p-2.5 text-[15px] xl:text-[18px] leading-none  shadow-[0_0_0_1px] shadow-black outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              rows="10"
              defaultValue={shop && shop.description}
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="city">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] xl:text-[20px] font-semibold leading-[35px]">
              What city are you shipping from?
            </Form.Label>
            <Form.Message
              className="text-[13px] xl:text-[16px] opacity-80"
              match="valueMissing"
            >
              Please enter a location
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded p-2.5 text-[15px] xl:text-[18px] leading-none shadow-[0_0_0_1px] shadow-black outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              defaultValue={shop && shop.address}
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="shipping">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] xl:text-[20px] font-semibold leading-[35px]">
              Shipping Options
            </Form.Label>
            <Form.Message
              className="text-[13px] xl:text-[16px] opacity-80"
              match="valueMissing"
            >
              Please select desired shipment method
            </Form.Message>
          </div>
          <Form.Control asChild>
            <select
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded px-2.5 text-[15px] xl:text-[18px] leading-none shadow-[0_0_0_1px] shadow-black outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              defaultValue={shop && shop.delivery_type}
              required
            >
              <option value="">--Select Shipment Method--</option>
              <option value="collect">Collection Only</option>
              <option value="deliver">Delivery Only</option>
              <option value="both">Collection or Delivery</option>
            </select>
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="theme">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] xl:text-[20px] font-semibold leading-[35px]">
              Select your shop theme
            </Form.Label>
          </div>
          <Form.Control asChild>
            <select
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded px-2.5 text-[15px] xl:text-[18px] leading-none shadow-[0_0_0_1px] shadow-black outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              defaultValue={shop && shop.theme}
              required
            >
              <option value="default">Default Theme</option>
              <option value="dark">Dark Theme</option>
              <option value="bold">Bold Colour Theme</option>
            </select>
          </Form.Control>
        </Form.Field>
        <Form.Field name="shopId">
          <Form.Control asChild>
            <input type="hidden" defaultValue={shop && shop.id} />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-prismarine px-[15px] font-semibold leading-none text-white shadow-[0_2px_10px] shadow-black hover:bg-benihired hover:text-white focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none xl:text-[20px]">
            {shop ? (
              <span>Update Shop Details</span>
            ) : (
              <span>Create my shop!</span>
            )}
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
