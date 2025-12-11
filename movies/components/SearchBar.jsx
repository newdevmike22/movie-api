import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movies..." className="border p-2 rounded-l w-64 focus:outline-none bg-white" />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
