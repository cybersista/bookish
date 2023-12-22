import { Outlet, Link } from 'react-router-dom';

const BukuPage = () => {
  return (
    <div className="min-h-screen bg-white py-4">
      <div className="m-4">
        <h2 className="m-4 text-2xl font-bold mb-8 md:mb-4">Dashboard Buku</h2>
        <nav className="mb-4 flex flex-wrap">
          <Link to="/admins/dashboard" className="bg-blue-500 text-white p-2 mx-2 mb-2 md:mb-0">
            Tambah Buku
          </Link>
          <Link to="/admins/buku-rekomendasi" className="bg-green-500 text-white p-2 mx-2 mb-2 md:mb-0">
            Buku Rekomendasi
          </Link>
          <Link to="/admins/buku-populer" className="bg-green-500 text-white p-2 mx-2 mb-2 md:mb-0">
            Buku Populer
          </Link>
          <Link to="/admins/penulis" className="bg-yellow-500 text-white p-2 mx-2 mb-2 md:mb-0">
            CRUD Penulis
          </Link>
          <Link to="/admins/penerbit" className="bg-yellow-500 text-white p-2 mx-2 mb-2 md:mb-0">
            CRUD Penerbit
          </Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default BukuPage;
