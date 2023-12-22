import { useEffect, useState } from "react";
import { getBukuTerbaru } from "../../modules/fetch/admins/buku";
import BookCard from "../../components/admins/BookCard";

const BukuRekomendasi = () => {
  const [rekomendasi, setRekomendasi] = useState([]);

  useEffect(() => {
    // Fetch data buku rekomendasi
    getBukuTerbaru()
      .then((response) => {
        setRekomendasi(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recommended books:", error.message);
      });
  }, []);

  return (
    <div className="min-h-screen p-4 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Buku Rekomendasi</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {rekomendasi.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BukuRekomendasi;
