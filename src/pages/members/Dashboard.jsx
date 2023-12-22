import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getBukuPopuler,
  getBukuTerbaru,
} from "../../modules/fetch/members/Buku";
import BukuCard from "../../components/members/BukuCard";

const Dashboard = () => {
  const [populer, setPopuler] = useState([]);
  const [rekomendasi, setRekomendasi] = useState([]);

  useEffect(() => {
    getBukuPopuler()
      .then((response) => {
        setPopuler(response.data);
      })
      .catch((error) => {
        console.error("Error fetching popular books:", error.message);
      });

    getBukuTerbaru()
      .then((response) => {
        setRekomendasi(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recommended books:", error.message);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF9EC] py-4">
      <div className="m-4">
        <div>
          <h2 className="m-4 text-2xl font-bold mb-4">Buku-Buku Populer Untuk Anda:</h2>
          <div className="mt-4">
            <Link to="/users/buku-populer" className="m-4 text-blue-500 block">
              Lihat Semua
            </Link>
          </div>
          <div className="ml-4 mr-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {populer.map((book) => (
              <BukuCard key={book.id} book={book} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="m-4 text-2xl font-bold mb-4">Rekomendasi Buku Untuk Anda:</h2>
          <div className="mt-4">
            <Link
              to="/users/buku-rekomendasi"
              className="m-4 text-blue-500 block"
            >
              Lihat Semua
            </Link>
          </div>
          <div className="ml-4 mr-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {rekomendasi.map((book) => (
              <BukuCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
