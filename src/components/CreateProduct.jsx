import React from "react";
import * as Form from "@radix-ui/react-form";
import { db } from "@/Utils/db";
import { revalidatePath } from "next/cache";

export default async function CreateProduct({ shopId }) {
  //shop_id in props
  async function handleSubmit(formData) {
    "use server";

    const productName = formData.get("productName");
    const description = formData.get("description");
    const category = formData.get("category");
    const price = formData.get("price");
    const shippingCost = formData.get("shippingCost");
    const image = formData.get("image");
    const glbModel = formData.get("glbModel");
    console.log(productName, price, description, shopId);
    const id = (
      await db.query(
        "INSERT INTO products (name, description, price, shipping, shop_id) VALUES ($1,$2,$3,$4, $5) RETURNING id",
        [productName, description, price, shippingCost, shopId]
      )
    ).rows[0].id;
    console.log(id);
    //NEED TO ADD SO MANY CHECKS FOR IF MODEL IS GLB AND STUFF ALTHOUGH INPUT SHOULD HAVE CONSIDERED THAT ALSO NEED CORRECT ERROR MESSAGING FOR FILE SIZE
    const imgId = (
      await db.query(
        "INSERT INTO images (products_id, name) VALUES ($1,$2) RETURNING id",
        [id, image.name]
      )
    ).rows[0].id;
    const glbId = (
      await db.query(
        "INSERT INTO glbs (product_id, name) VALUES ($1,$2) RETURNING id",
        [id, glbModel.name]
      )
    ).rows[0].id;
    console.log("global " + glbId, "imag " + imgId);
    await fetch(
      //3bay-files should be an ENV VARIABLE
      `https://11mn4if8mi.execute-api.eu-west-2.amazonaws.com/dev/3bay-files/${imgId}`,
      { method: "PUT", body: image, headers: { "Content-Type": image.type } }
    );
    await fetch(
      //3bay-files should be an ENV VARIABLE
      `https://11mn4if8mi.execute-api.eu-west-2.amazonaws.com/dev/3bay-files/${glbId}`,
      {
        method: "PUT",
        body: glbModel,
        headers: { "Content-Type": "model/gltf-binary" },
      }
    );
    revalidatePath(`/store/${shopId}`);
  }
  return (
    <div className="overflow-y-scroll overflow-x-hidden max-h-[60vh] px-1">
      <Form.Root action={handleSubmit} className="flex flex-col justify-center">
        <Form.Field name="productName">
          <div>
            <Form.Label>Product Name:</Form.Label>
            <Form.Message match="valueMissing">
              Please enter a Product Name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="text"
              required
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-purple-950 selection:bg-slate-400 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="description">
          <div>
            <Form.Label>Product Description</Form.Label>
          </div>
          <Form.Control asChild>
            <textarea className="box-border inline-flex h-[70px] w-full appearance-none items-center justify-center rounded p-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-purple-950 selection:bg-slate-400 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]" />
          </Form.Control>
        </Form.Field>
        <Form.Field name="category">
          <div>
            <Form.Label>Choose a category for your product</Form.Label>
            <Form.Message match="valueMissing">
              You must choose a category
            </Form.Message>
          </div>
          <Form.Control asChild>
            <select>
              <option value="">--Please choose an option--</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
          </Form.Control>
        </Form.Field>
        <Form.Field name="price">
          <div>
            <Form.Label>Product Price</Form.Label>
            <Form.Message match="valueMissing">
              You must have a price
            </Form.Message>
            <Form.Message>Must be less than £1000</Form.Message>
            <Form.Message>Must be at least £1.00</Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="text"
              required
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-purple-950 selection:bg-slate-400 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="shippingCost">
          <div>
            <Form.Label>Shipping Cost</Form.Label>
            <Form.Message>Must be less than £1000</Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="text"
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-purple-950 selection:bg-slate-400 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="image">
          <div>
            <Form.Label>Product Image</Form.Label>
          </div>
          <Form.Control asChild>
            <input type="file" accept="image/*" />
          </Form.Control>
        </Form.Field>
        <Form.Field name="glbModel">
          <div>
            <Form.Label>Product 3d Model</Form.Label>
          </div>
          <Form.Control asChild>
            <input type="file" accept="model/gltf-binary, .glb" />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button>Create/Edit</button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
