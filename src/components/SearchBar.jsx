"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log("searching...");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");

    if (name) {
      router.push(`/products?name=${name}`);
    }
  };

  return (
    <form
      className="flex items-center justify-between bg-gingeralefizz text-bratwurst p-2 rounded-md flex-1 "
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="bg-transparent flex-1 outline-none"
      />
      <button className="cursor-pointer" aria-label="search button">
        <SearchIcon />
      </button>
    </form>
  );
}
