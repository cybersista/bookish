import { useState } from "react";
import { getBukuByKategori } from "../../modules/fetch/members/Buku";
import BukuCard from "../../components/members/BukuCard";

const KategoriBuku = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const result = await getBukuByKategori(searchQuery);
      setSearchResult(result.data);
      setError("");
    } catch (error) {
      console.error("Error searching books by category:", error.message);
      setError(
        `Mohon Maaf, Buku Dengan Kategori ${searchQuery} Tidak Ditemukan!!!`
      );
      setSearchResult([]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF9EC] p-4">
 <form onSubmit={handleSearch} className="mt-4 flex items-center">
  <input
    type="search"
    id="search-category"
    className="flex-1 p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
    placeholder="Search your book with Category..."
    required
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  ></input>
  <button
    type="submit"
    className="p-2.5 z-20 text-sm font-medium h-full text-white bg-[#677C52] hover:bg-[#8FA778] focus:ring-4 focus:outline-none rounded-r-lg focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <svg
      className="w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  </button>
</form>

      {error && (
        <h2 className="m-4 text-2xl font-bold text-gray-900 dark:text-white">
          {error}
        </h2>
      )}

      {searchResult.length > 0 && (
        <div>
          <h2 className="m-4 text-2xl font-bold text-gray-900 dark:text-white">
            Search Results For Product With Category {searchQuery}:
          </h2>
          <div className="ml-4 mr-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {searchResult.map((book) => (
              <BukuCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default KategoriBuku;
