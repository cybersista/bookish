import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import { getAllRiwayatPesanan } from '../../modules/fetch/members/riwayatPesanan';

const RiwayatPesanan = () => {
  const [riwayatPesanan, setRiwayatPesanan] = useState([]);

  useEffect(() => {
    fetchRiwayatPesanan();
  }, []);

  const fetchRiwayatPesanan = async () => {
    try {
      const response = await getAllRiwayatPesanan();
      console.log('Data received:', response);
      setRiwayatPesanan(response);
    } catch (error) {
      console.error('Error fetching riwayat pesanan:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Baru':
        return 'bg-blue-100 text-blue-800  me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ';
      case 'Proses Packing':
        return 'bg-yellow-100 text-yellow-800  me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300';
      case 'Dikirim':
        return 'bg-green-100 text-green-800  me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300';
      case 'Dibatalkan':
        return 'text-right bg-red-100 text-red-800 me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300  ';
      default:
        return 'bg-blue-100 text-blue-800  me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300';
    }
  };


  return (
    <div className="container bg-[#FDF9EC]">
        <br />
      <h2 className="mb-8  px-6 text-3xl font-bold">Riwayat Pesanan</h2>
      <div className="px-32 grid gap-4" >
        {riwayatPesanan.map((pesanan) => (
          <div key={pesanan.id} className="mb-4 ">
            <div className="relative w-full bg-white rounded-lg overflow-hidden shadow-lg flex">
              <p className="absolute top-0 left-0 bg-[#677C52] text-white px-2 py-1">
                Pesanan {pesanan.id}
              </p>
              <img
                className="w-64 px-6 py-6 h-auto object-cover"
                src="https://images.unsplash.com/photo-1701206886289-05bc76ff6071?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" //path nya diubah dulu
                alt={`Pesanan #${pesanan.id}`}
              />
              <div className="w-full px-6 py-4">
                <div className="text-right">
                <span className={`text-base font-medium  ${getStatusColor(pesanan.statusPesanan)}`}>
                {pesanan.statusPesanan}
                  </span>
                </div>
                  <hr className="my-4" />
                {pesanan.pesananItems.map((item) => (
                  <div key={item.id} >
                    <p className="text-gray-700 font-bold text-xl">{item.bukus && item.bukus.judul}</p>
                    <p className="text-gray-700 text-base mt-8">{item.jumlah} Barang </p>
                  </div>
                ))}
                <hr className="my-4" />
                <p className="text-gray-700 text-base text-right mt-2">
                <span className="text-gray-700 ">Total pesanan </span>
                <span className="font-bold text-gray-700">Rp{pesanan.total}</span>
                </p>
                <p className=" mt-4">
                <Link to={`${pesanan.id}`} className="text-blue-500 text-sm font-bold">
                Lihat Detail Pesanan
                </Link>
                    </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiwayatPesanan;
