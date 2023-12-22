import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import axios from 'axios';
import { getRiwayatPesananById } from '../../modules/fetch/members/riwayatPesanan';

const DetailRiwayatPesanan = () => {
  const { id } = useParams();
  const [detailPesanan, setDetailPesanan] = useState(null);

  useEffect(() => {
    const fetchDetailPesananById = async () => {
      try {
        const response = await getRiwayatPesananById(id);
        setDetailPesanan(response);
      } catch (error) {
        console.error('Error fetching detail pesanan:', error);
      }
    };

    fetchDetailPesananById();
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  }

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

  const getStatusBayarColor = (status) => {
    switch (status) {
      case 'Belum Dibayar':
        return 'bg-yellow-100 text-yellow-800 me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300';
      case 'Sudah Dibayar':
        return 'bg-green-100 text-green-800 me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300';
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
                src="https://images.unsplash.com/photo-1701206886289-05bc76ff6071?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ////path nya diubah dulu
                alt={item.bukus && item.bukus.judul}
                className="w-52 px-6  h-auto object-cover"
              />
              <div className="w-full px-6 py-4">
                <div>
                  <p className="text-gray-700 font-bold text-xl mb-4">{item.bukus && item.bukus.judul}</p>
                  <p className="text-gray-700 text-base mt-2">{item.jumlah} Barang</p>
                </div>
                <br />
              </div>
            </div>
          ))}
               <hr className="my-4" />
                <p className="text-gray-700 text-base text-right mt-2 ">
                  <span className="text-gray-700 ">Total pesanan </span>
                  <span className="font-bold text-gray-700">Rp{detailPesanan.total}</span>
                </p>
        </div>
      </div>
      <div className="m-4 px-32">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
        <h1 className="text-lg font-bold mb-4 text-[#677C52]">Info Pemesanan </h1>
            <p className="text-gray-700 font-semibold mb-2 ">Status Transaksi</p>
            <span className={`text-base font-medium  ${getStatusBayarColor(detailPesanan.pesananPayments[0]?.statusBayar)}`}>
              {detailPesanan.pesananPayments[0]?.statusBayar}
            </span>
            <p className="text-gray-700 font-semibold mt-2 mb-2">Tanggal Pemesanan</p>
            <p >{formatDate(detailPesanan.pesananItems[0]?.createdAt)}</p>
        </div>
      </div>
      <div className="m-4 px-32">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
        <div className="text-lg font-bold mb-2 text-[#677C52]">Metode Pembayaran</div>
          <p className="text-gray-700">{detailPesanan.pesananPayments[0]?.provider}</p>
        </div>
      </div>
      <div className="m-4 px-32 ">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
        <div className="text-lg font-bold mb-2 text-[#677C52]">Alamat Pengiriman</div>
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
  )
};

export default DetailRiwayatPesanan;