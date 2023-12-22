// DashboardBuku.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getAllBuku,
  deleteBuku,
  getBukuById,
} from "../../modules/fetch/admins/buku";
// import {BookCard} from "../../components/admins/BookCard"

const DashboardBuku = () => {
  const [books, setBooks] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [searchedBook, setSearchedBook] = useState(null);

  useEffect(() => {
    // Fetch all books initially
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const allBooks = await getAllBuku();
      setBooks(allBooks);
    } catch (error) {
      console.error("Error fetching books:", error.message);
    }
  };

  const handleSearch = async () => {
    try {
      const book = await getBukuById(searchId);
      setSearchedBook(book);
    } catch (error) {
      console.error("Error searching for book:", error.message);
      setSearchedBook(null);
    }
  };

  const handleDelete = async (bookId) => {
    try {
      await deleteBuku(bookId);
      // Refresh the book list after deletion
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white py-4">
      <div className="m-4">
        <h2 className="m-4 text-2xl font-bold mb-4">Kelola Buku</h2>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search by ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="border p-2 mr-2"
          />
          <button onClick={handleSearch} className="bg-blue-500 text-white p-2">
            Search
          </button>
          <Link to="/admins/create-buku" className="bg-green-500 text-white p-2 ml-auto">
            Create Buku
          </Link>
        </div>
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">
              {/* <BookCard key={book.id} /> */}
              {/* <Link to={`/detail-buku/${book.id}`}> */}
                Judul
                {/* </Link> */}
                </th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {searchedBook ? (
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">{searchedBook.judul}</td>
                <td className="border p-2">
                  <Link to={`/admins/update-buku/${searchedBook.id}`}>
                    <button className="bg-blue-500 text-white p-2 p-2 mr-2">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(searchedBook.id)}
                    className="bg-red-500 text-white p-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ) : (
              books.map((book, index) => (
                <tr key={book.id}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{book.judul}</td>
                  <td className="border p-2">
                    <Link to={`/admins/update-buku/${book.id}`}>
                      <button className="bg-yellow-500 text-white p-2 mr-2">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="bg-red-500 text-white p-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardBuku;
