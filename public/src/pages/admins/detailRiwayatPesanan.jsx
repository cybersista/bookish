import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { getRiwayatPesananById, updateStatusPesanan } from '../../modules/fetch/admins/riwayatPesanan';

const DetailRiwayatPesanan = () => {
  const { id } = useParams();
  const [detailPesanan, setDetailPesanan] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchDetailPesananById = async () => {
    try {
      const response = await getRiwayatPesananById(id);
      setDetailPesanan(response);
    } catch (error) {
      console.error('Error fetching detail pesanan:', error);
    }
  };

  useEffect(() => {
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
  
  const handleUpdateOrder = (orderId) => {
    setSelectedOrderId(orderId);
    setShowDropdown(true);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleUpdateStatus = async () => {
    if (selectedStatus && selectedOrderId) {
      try {
        await updateStatusPesanan(selectedOrderId, selectedStatus);

        setSelectedOrderId(null);
        setSelectedStatus(null);
        setShowDropdown(false);

        fetchDetailPesananById();
      } catch (error) {
        console.error('Error updating order status:', error);
      }
    }
  };

  const renderActionButton = () => {
    if (detailPesanan.statusPesanan === 'Dikirim') {
      return (
        <button
          onClick={() => handleUpdateOrder(detailPesanan.id)}
          className="py-2 px-4 rounded bg-blue-500 text-white focus:outline-none focus:ring focus:border-blue-300"
        >
          <span className="mr-2">Atur Pengembalian</span>
        </button>
      );
    }  if (detailPesanan.statusPesanan === 'Dibatalkan') {
        return (
          <button
            onClick={() => handleUpdateOrder(detailPesanan.id)}
            className="py-2 px-4 rounded bg-blue-500 text-white focus:outline-none focus:ring focus:border-blue-300"
          >
            <span className="mr-2">Berikan Alasan</span>
          </button>
        );
      }
      else {
      return (
        <div className="mt-2">
    
          <button
            onClick={() => handleUpdateOrder(detailPesanan.id)}
            className={`py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 ${
              detailPesanan.statusPesanan === 'Dikirim' ? 'bg-blue-500 text-white' :
              detailPesanan.statusPesanan === 'Proses Packing' ? 'bg-yellow-400 text-black' :
              detailPesanan.statusPesanan === 'Dibatalkan' ? 'bg-red-500 text-white' :
              'bg-blue-500 text-white'
            }`}
          >
            <span className="mr-2">Atur Pengiriman</span>
            <FontAwesomeIcon icon={faEdit} className="text-white" />
          </button>
          
          {showDropdown && selectedOrderId === detailPesanan.id && (
            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
            <button
              onClick={() => handleStatusChange('Dikirim')}
              className={`block px-4 py-2 text-sm ${
                detailPesanan.statusPesanan === 'Dikirim' ? 'text-white bg-blue-500 hover:bg-blue-600' : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              Dikirim
            </button>
            <button
              onClick={() => handleStatusChange('Proses Packing')}
              className={`block px-4 py-2 text-sm ${
                detailPesanan.statusPesanan === 'Proses Packing' ? 'text-black bg-yellow-400 hover:bg-yellow-600' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              Proses Packing
            </button>
            <button
              onClick={() => handleStatusChange('Dibatalkan')}
              className={`block px-4 py-2 text-sm ${
                detailPesanan.statusPesanan === 'Dibatalkan' ? 'text-white bg-red-500 hover:bg-red-600' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              Dibatalkan
            </button>
          </div>
              <button
                onClick={handleUpdateStatus}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  detailPesanan.statusPesanan === 'Dikirim' ? 'bg-blue-500 hover:bg-blue-600' :
                  detailPesanan.statusPesanan === 'Proses Packing' ? 'bg-yellow-400 hover:bg-yellow-600' :
                  detailPesanan.statusPesanan === 'Dibatalkan' ? 'bg-red-500 hover:bg-red-600' :
                  'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                Save
              </button>
            </div>
          )}
        </div>

      );
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
          <div className="text-lg font-bold mb-2">
            {detailPesanan.statusPesanan === 'Baru' || detailPesanan.statusPesanan === 'Proses Packing'
              ? 'Perlu Dikirim'
              : detailPesanan.statusPesanan === 'Dikirim'
              ? 'Pesanan Dikirim'
              : detailPesanan.statusPesanan === 'Dibatalkan'
              ? 'Pesanan Dibatalkan'
              : ''}
          </div>
          <div className="text-right">
            {renderActionButton()}
          </div>
        </div>
      </div>
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
                className="w-32 px-6  h-auto object-cover"
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
          {detailPesanan.users && detailPesanan.users.detailUsers && detailPesanan.users.detailUsers[0].nama} | {detailPesanan.users && detailPesanan.users.detailUsers && detailPesanan.users.detailUsers[0].telepon}
           <br />
            {detailPesanan.users && detailPesanan.users.detailUsers && detailPesanan.users.detailUsers[0].alamat}
            <br />
            Kode Pos: {detailPesanan.users && detailPesanan.users.detailUsers && detailPesanan.users.detailUsers[0].kodePos}
            
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default DetailRiwayatPesanan;
