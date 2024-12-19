import React from "react";
import * as Form from "@radix-ui/react-form";

import { db } from "@/utils/db";

import { revalidatePath } from "next/cache";
import { GetProduct } from "@/utils/actions";
import { redirect } from "next/navigation";

export default async function CreateProduct({ shopId, productId }) {
  let currProduct = "";
  if (productId) {
    currProduct = await GetProduct(productId);
  }
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

  async function handleUpdate(formData) {
    "use server";
    const obj = Object.fromEntries(formData.entries());
    const {
      productName,
      description,
      price,
      shippingCost,
      image,
      glbModel,
      productId,
    } = obj;
    // console.log("product form object is: ", obj);

    await db.query(
      `UPDATE products SET name = $1, description = $2, price = $3, shipping = $4 WHERE id = $5`,
      [productName, description, price, shippingCost, productId]
    );

    // If new image has been uploaded
    if (image.size > 0) {
      let imgId = (
        await db.query(
          `UPDATE images SET name = $1 WHERE products_id = $2 RETURNING id`,
          [image.name, productId]
        )
      ).rows[0].id;
      await fetch(
        //3bay-files should be an ENV VARIABLE
        `https://11mn4if8mi.execute-api.eu-west-2.amazonaws.com/dev/3bay-files/${imgId}`,
        { method: "PUT", body: image, headers: { "Content-Type": image.type } }
      );
    }

    // If new glb model has been uploaded
    if (glbModel.size > 0) {
      const exists = await db.query(
        `SELECT * from glbs WHERE product_id = $1`,
        [productId]
      );
      let glbId = "";
      if (exists.rowCount > 0) {
        glbId = (
          await db.query(
            `UPDATE glbs SET name = $1 WHERE product_id = $2 RETURNING id`,
            [glbModel.name, productId]
          )
        ).rows[0].id;
      } else {
        glbId = (
          await db.query(
            `INSERT INTO glbs (product_id, name) VALUES ($1,$2) RETURNING id`,
            [productId, glbModel.name]
          )
        ).rows[0].id;
      }
      await fetch(
        //3bay-files should be an ENV VARIABLE
        `https://11mn4if8mi.execute-api.eu-west-2.amazonaws.com/dev/3bay-files/${glbId}`,
        {
          method: "PUT",
          body: glbModel,
          headers: { "Content-Type": "model/gltf-binary" },
        }
      );
    }

    revalidatePath(`/products/${productId}`);
    redirect(`/products/${productId}`);
  }

  return (
    <div className="overflow-y-scroll overflow-x-hidden max-h-[60vh] px-1">
      <Form.Root
        action={currProduct ? handleUpdate : handleSubmit}
        className="flex flex-col justify-center"
      >
        <Form.Field name="productName">
          <div className="flex justify-between">
            <Form.Label>Product Name:</Form.Label>
            <Form.Message match="valueMissing">
              Please enter a Product Name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="text"
              required
              defaultValue={currProduct && currProduct.name}
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-purple-950 selection:bg-gray400 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="description">
          <div className="flex justify-between">
            <Form.Label>Product Description</Form.Label>
          </div>
          <Form.Control asChild>
            <textarea
              className="box-border inline-flex h-[70px] w-full appearance-none items-center justify-center rounded p-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-purple-950 selection:bg-gray400 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              defaultValue={currProduct && currProduct.description}
            />
          </Form.Control>
        </Form.Field>
        {/*  <Form.Field name="category">
          <div className="flex justify-between">
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
        </Form.Field>*/}
        <Form.Field name="price">
          <div className="flex justify-between">
            <Form.Label>Product Price</Form.Label>
            <Form.Message match="valueMissing">
              You must have a price
            </Form.Message>
            <Form.Message
              match={async (value) => {
                "use server";
                if (value >= 1000) {
                  return true;
                } else {
                  return false;
                }
              }}
            >
              Must be less than £1000
            </Form.Message>
            <Form.Message
              match={async (value) => {
                "use server";
                if (value < 1.0) {
                  return true;
                } else {
                  return false;
                }
              }}
            >
              Must be at least £1.00
            </Form.Message>
            <Form.Message
              match={async (value) => {
                "use server";
                const regex = /^(?:\d{1,3}|£(\d{1,3})).\d{2}$/g;
                if (value.match(regex)) {
                  return false;
                } else {
                  return true;
                }
              }}
            >
              Values must be in the format £00.00 or 00.00
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="text"
              required
              defaultValue={currProduct && currProduct.price}
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-purple-950 selection:bg-gray400 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="shippingCost">
          <div className="flex justify-between">
            <Form.Label>Shipping Cost</Form.Label>
            <Form.Message
              match={async (value) => {
                "use server";
                const regex = /^(?:\d{0,2}|£(\d{0,2})).\d{2}$/g;
                if (value.match(regex)) {
                  return false;
                } else {
                  return true;
                }
              }}
            >
              Values must be in the format £00.00 or 00.00
            </Form.Message>
            <Form.Message
              match={async (value) => {
                "use server";
                if (value >= 1000) {
                  return true;
                } else {
                  return false;
                }
              }}
            >
              Must be less than £100
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="text"
              defaultValue={currProduct && currProduct.shipping}
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-purple-950 selection:bg-gray400 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="image">
          <div className="flex justify-between">
            <Form.Label>Product Image</Form.Label>
            <Form.Message forceMatch>Image must be less than 5mb</Form.Message>
          </div>
          <Form.Control asChild>
            <input type="file" accept="image/*" />
          </Form.Control>
        </Form.Field>
        <Form.Field name="glbModel">
          <div className="flex justify-between">
            <Form.Label>Product 3d Model</Form.Label>
            <Form.Message forceMatch>File must be less than 5mb</Form.Message>
          </div>
          <Form.Control asChild>
            <input type="file" accept="model/gltf-binary, .glb" />
          </Form.Control>
        </Form.Field>
        <Form.Field name="productId">
          <Form.Control asChild>
            <input type="hidden" defaultValue={currProduct && currProduct.id} />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          {currProduct ? <button>Update</button> : <button>Create</button>}
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
