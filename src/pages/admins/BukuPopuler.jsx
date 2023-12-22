// pages/BukuPopuler.js
import { useEffect, useState } from "react";
import { getBukuPopuler } from "../../modules/fetch/admins/buku";
import BookCard from "../../components/admins/BookCard";

const BukuPopuler = () => {
  const [populer, setPopuler] = useState([]);

  useEffect(() => {
    // Fetch data buku populer
    getBukuPopuler()
      .then((response) => {
        setPopuler(response.data);
      })
      .catch((error) => {
        console.error("Error fetching popular books:", error.message);
      });
  }, []);

  return (
    <div className="min-h-screen p-4 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Buku Populer</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {populer.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BukuPopuler;
