import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailRiwayatPesanan = () => {
  const { id } = useParams();
  const [detailPesanan, setDetailPesanan] = useState(null);

  useEffect(() => {
    const fetchDetailPesananById = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/riwayat-pesanan/${id}`);
        setDetailPesanan(response.data);
      } catch (error) {
        console.error('Error fetching detail pesanan:', error);
      }
    };

    fetchDetailPesananById();
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Baru':
        return 'bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300';
      case 'Proses Packing':
        return 'bg-yellow-100 text-yellow-800 me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300';
      case 'Dikirim':
        return 'bg-green-100 text-green-800 me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300';
      case 'Dibatalkan':
        return 'text-right bg-red-100 text-red-800 me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300';
    }
  };

  if (!detailPesanan) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container bg-[#FDF9EC]">
      <h2 className="text-2xl font-bold px-20 mb-4 py-4">Detail Pesanan </h2>
      <div className="m-4 px-32">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
        <div className="text-right">
            <span className={`text-base font-medium ${getStatusColor(detailPesanan.statusPesanan)}`}>
            {detailPesanan.statusPesanan}
            </span>
        </div>
          {detailPesanan.pesananItems.map((item) => (
            <div key={item.id} className="mb-4 flex items-center">
              <img
                src="https://images.unsplash.com/photo-1701206886289-05bc76ff6071?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={item.bukus && item.bukus.judul}
                className="w-64 px-6 py-6 h-auto object-cover"
              />
              <div className="w-full px-6 py-4">
                
                <div>
                  <p className="text-gray-700 font-bold text-xl mb-4">{item.bukus && item.bukus.judul}</p>
                  <p className="text-gray-700 text-base mt-2">{item.jumlah} Barang</p>
                </div>
                <hr className="my-4" />
                <p className="text-gray-700 text-base text-right mt-2">
                  <span className="text-gray-700 ">Total pesanan </span>
                  <span className="font-bold text-gray-700">Rp{detailPesanan.total}</span>
                </p>
                <p className=" mt-4">{/* Additional content */}</p>
              </div>
            </div>
          ))}
          <hr className="my-4" />
          <div className="text-xl font-bold mb-2">Info Pemesanan</div>
          <p className="text-gray-700">
            <span className="bg-info text-black px-2 py-1 rounded">
              Status Pesanan: {detailPesanan.statusPesanan}
            </span>
            <br />
            Tanggal Pemesanan: {formatDate(detailPesanan.pesananItems[0]?.createdAt)}
          </p>
          <hr className="my-4" />
          <div className="text-xl font-bold mb-2">Metode Pembayaran</div>
          <p className="text-gray-700">{detailPesanan.pesananPayments[0]?.provider}</p>
          <hr className="my-4" />
          <div className="text-xl font-bold mb-2">Alamat Pengiriman</div>
          <p className="text-gray-700">
            {detailPesanan.users && detailPesanan.users.detailUsers && detailPesanan.users.detailUsers[0].alamat}
            <br />
            Kode Pos: {detailPesanan.users && detailPesanan.users.detailUsers && detailPesanan.users.detailUsers[0].kodePos}
            <br />
            No Telpon: {detailPesanan.users && detailPesanan.users.detailUsers && detailPesanan.users.detailUsers[0].telepon}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailRiwayatPesanan;
