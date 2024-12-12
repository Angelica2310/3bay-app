// This is the BUYER profile page
// links to Search Page - CHANGE TO CORRECT PATH BELOW

import { revalidatePath } from "next/cache";

export default function BuyerProfile() {
  //revalidatePath("/");

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-6 bg-white p-8 rounded-lg shadow-lg ">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile pic"
          className="w-24 h-24 rounded-full border-4 border-gray-300"
        />
        <input
          type="user_name"
          placeholder="user name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>

        <input
          type="email"
          placeholder="email from clerk_id?"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>
        <button className="button-style">Submit</button>
        <button className="button-style">Become a Seller</button>

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
            <img
              src="https://via.placeholder.com/150"
              alt="Product 2"
              className="w-full h-auto border-2 border-gray-300"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Product 3"
              className="w-full h-auto border-2 border-gray-300"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Product 4"
              className="w-full h-auto border-2 border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
