import React from "react";
import * as Form from "@radix-ui/react-form";

export default function CreateProduct() {
  return (
    <div>
      <Form.Root>
        <Form.Field name="productName">
          <div>
            <Form.Label>Product Name:</Form.Label>
            <Form.Message match="valueMissing">
              Please enter a Product Name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field name="description">
          <div>
            <Form.Label>Product Description</Form.Label>
          </div>
          <Form.Control asChild>
            <textarea />
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
            <input type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field name="shippingCost">
          <div>
            <Form.Label>Product Price</Form.Label>
            <Form.Message>Must be less than £1000</Form.Message>
          </div>
          <Form.Control asChild>
            <input type="text" />
          </Form.Control>
        </Form.Field>
        <Form.Field name="image">
          <div>
            <Form.Label>Product Image</Form.Label>
          </div>
          <Form.Control asChild>
            <input type="file" accept="image/*" required />
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
        <Form.submit asChild>
          <button>Create/Edit</button>
        </Form.submit>
      </Form.Root>
    </div>
  );
}
