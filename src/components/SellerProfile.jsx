// This is the SELLER profile page
// links to the form to create/edit shop OR shop page - CHANGE TO CORRECT PATH BELOW

import Link from "next/link";

export default function SellerProfile() {
  //revalidatePath("/");

  return (
    <div className="page-placement-style">
      <div className="form-border-style">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile pic"
          className="w-24 h-24 rounded-full border-4 border-gray-300"
        />
        <Form.Root action={handleSubmit}>
          <Form.Field name="userName">
            <div>
              <Form.Label className="text-black">User Name:</Form.Label>
              <Form.Message match="valueMissing">
                Please enter your user name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input type="text" required className="input-style" />
            </Form.Control>
          </Form.Field>

          <Form.Field name="email">
            <div>
              <Form.Label className="text-black">Email Address:</Form.Label>
              <Form.Message match="valueMissing">
                Please enter your email address
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input type="text" required className="input-style" />
            </Form.Control>
          </Form.Field>
        </Form.Root>
        <Link href="/">
          <button className="submit-style">Submit</button>
        </Link>
        <div>
          <Link href="/">
            <button className="button-style">Create Shop</button>
          </Link>
          <Link href="/">
            <button className="button-style">View or Edit Shop</button>
          </Link>
        </div>
        <div className="w-full bg-white-200 p-4 rounded-lg mt-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Recently Viewed Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 1"
              className="w-full h-auto border-2 border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
