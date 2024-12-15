import { GetUser } from "@/utils/actions";
import { db } from "@/Utils/db";
import * as Form from "@radix-ui/react-form";
import { revalidatePath } from "next/cache";

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
// shop name, shop desc, address/location, shipping options, shop theme/personalisation

export default function CreateShopForm() {
  return (
    <div>
      <h3 className="text-center mb-8 text-2xl font-semibold">
        Create a storefront
      </h3>
      <Form.Root
        className="w-[300px] sm:w-[400px] md:w-[600px] xl:w-[900px]"
        action={handleAddShop}
      >
        <Form.Field className="mb-2.5 grid" name="name">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] xl:text-[20px] font-medium leading-[35px]">
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
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] xl:text-[18px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-blue hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="description">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] xl:text-[20px] font-medium leading-[35px]">
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
              className="box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded bg-blackA2 p-2.5 text-[15px] xl:text-[18px] leading-none  shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-blue hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              rows="10"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="city">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] xl:text-[20px] font-medium leading-[35px]">
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
              className="box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded bg-blackA2 p-2.5 text-[15px] xl:text-[18px] leading-none  shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-blue hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="shipping">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] xl:text-[20px] font-medium leading-[35px]">
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
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] xl:text-[18px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
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
            <Form.Label className="text-[15px] xl:text-[20px] font-medium leading-[35px]">
              Select your shop theme
            </Form.Label>
          </div>
          <Form.Control asChild>
            <select
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] xl:text-[18px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              required
            >
              <option value="default">Default Theme</option>
              <option value="dark">Dark Theme</option>
              <option value="bold">Bold Colour Theme</option>
            </select>
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-grey px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none xl:text-[20px]">
            Create my shop!
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
