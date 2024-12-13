// This is the SELLER profile page
// links to the form to create/edit shop OR shop page - CHANGE TO CORRECT PATH BELOW

import Link from "next/link";

export default function SellerProfile() {
  //revalidatePath("/");

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div
        className="flex flex-col items-center space-y-6 bg-white p-8 max-w-2xl rounded-md shadow-lg
    "
      >
        <img
          src="https://via.placeholder.com/150"
          alt="Profile pic"
          className="w-24 h-24 rounded-full border-4 border-gray-300"
        />
        <input
          type="user_name"
          placeholder="user name"
          className="input-style"
        ></input>

        <input
          type="email"
          placeholder="email address"
          className="input-style"
        ></input>

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

        <div className="w-full bg-gray-200 p-4 rounded-lg mt-6">
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
