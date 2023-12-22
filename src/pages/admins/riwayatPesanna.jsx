// import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import { getAllRiwayatPesanan, updateStatusPesanan } from '../../modules/fetch/admins/riwayatPesanan';

// const ShopAdminPages = () => {
//   const [riwayatPesanan, setRiwayatPesanan] = useState([]);
//   const [activeTab, setActiveTab] = useState('all'); // Default tab is 'all'
//   const [selectedOrderId, setSelectedOrderId] = useState(null);
//   const [selectedStatus, setSelectedStatus] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);
  
//   useEffect(() => {
//     fetchRiwayatPesanan();
//   }, []);

//   const fetchRiwayatPesanan = async () => {
//     try {
//       const response = await getAllRiwayatPesanan();
//       console.log('Data received:', response);
//       setRiwayatPesanan(response);
//     } catch (error) {
//       console.error('Error fetching riwayat pesanan:', error);
//     }
//   };

//   const filterOrdersByStatus = (status) => {
//     if (status === 'all') {
//       return riwayatPesanan;
//     } else {
//       return riwayatPesanan.filter(order => order.statusPesanan === status);
//     }
//   };

//   const sortOrdersByStatus = (status) => {
//     const sortedOrders = filterOrdersByStatus(status);
//     return sortedOrders.sort((a, b) => a.id - b.id);
//   };

//   const handleUpdateOrder = (orderId) => {
//     setSelectedOrderId(orderId);
//     setShowDropdown(true);
//   };

//   const handleStatusChange = (status) => {
//     setSelectedStatus(status);
//   };

//   const handleUpdateStatus = async () => {
//     if (selectedStatus && selectedOrderId) {
//       try {
//         // Call the API to update the order status
//         await updateStatusPesanan(selectedOrderId, selectedStatus);

//         // Reset values
//         setSelectedOrderId(null);
//         setSelectedStatus(null);
//         setShowDropdown(false);

//         // Refresh the order list
//         fetchRiwayatPesanan();
//       } catch (error) {
//         console.error('Error updating order status:', error);
//       }
//     }
//   };
//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="px-8 text-3xl font-semibold mb-6">Order Management</h1>
//       <ul className="px-8 flex mb-6">
//         <li
//           onClick={() => setActiveTab('all')}
//           className={`mr-4 cursor-pointer ${
//             activeTab === 'all' ? 'text-blue-500 border-b-2 border-blue-500' : ''
//           }`}
//         >
//           All
//         </li>
//         <li
//           onClick={() => setActiveTab('Baru')}
//           className={`mr-4 cursor-pointer ${
//             activeTab === 'Baru' ? 'text-blue-500 border-b-2 border-blue-500' : ''
//           }`}
//         >
//           Baru
//         </li>
//         <li
//           onClick={() => setActiveTab('Proses Packing')}
//           className={`mr-4 cursor-pointer ${
//             activeTab === 'Proses Packing' ? 'text-blue-500 border-b-2 border-blue-500' : ''
//           }`}
//         >
//           Proses Packing
//         </li>
//         <li
//           onClick={() => setActiveTab('Dikirim')}
//           className={`mr-4 cursor-pointer ${
//             activeTab === 'Dikirim' ? 'text-blue-500 border-b-2 border-blue-500' : ''
//           }`}
//         >
//           Dikirim
//         </li>
       
//         <li
//           onClick={() => setActiveTab('Dibatalkan')}
//           className={`cursor-pointer ${
//             activeTab === 'Dibatalkan' ? 'text-blue-500 border-b-2 border-blue-500' : ''
//           }`}
//         >
//           Dibatalkan
//         </li>
//       </ul>
//       <div className="px-8 grid gap-6">
//         {sortOrdersByStatus(activeTab).map(order => (
//         <div key={order.id} className="bg-white p-6 rounded-md shadow-md "  >
//             <p className="text-gray-600 flex items-center">
//          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden mr-2">
//           <FontAwesomeIcon icon={faUser} className="text-white" />
//          </div> {order.users && order.users.detailUsers && order.users.detailUsers[0].nama}
//          </p>
//          <hr className="my-2" />
//             <div  className=" grid grid-cols-1 md:grid-cols-3">
//             {/* Kolom 1: Gambar Buku dan Judul */}

//       <div className="col-span-1 ">
//         <div className="flex">
//           <img 
//             src="https://images.unsplash.com/photo-1701206886289-05bc76ff6071?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//             alt={order.bookTitle} 
//             className="w-32 px-6 py-6 h-auto object-cover" 
//           />
//           <div className="ml-4">
//             {order.pesananItems.map((item) => (
//               <div key={item.id} className="mb-2">
//                 <p className="text-gray-700 py-12 px-8 text-base">{item.bukus && item.bukus.judul}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
      
//       {/* Kolom 2: Jumlah Buku dan Total Belanja */}
//       <div className="col-span-1 py-12 px-8">
//         <div className="flex " >
//         x{order.pesananItems && order.pesananItems[0]?.jumlah}
//           <div className="ml-4">
//             Rp{order.total}
//           </div>
//         </div>
//       </div>
      

//       {/* Kolom 3: Status Pesanan dan Tombol Update Pesanan */}
//       <div className="col-span-1 flex flex-col items-center">
//       <p className="mb-4 ">
//                 <Link to={`${order.id}`} className="text-blue-500 text-sm font-bold">
//                 Lihat Detail Pesanan
//                 </Link>
//                     </p>
//   <div className="relative inline-block text-left">
//     <button
//       onClick={() => handleUpdateOrder(order.id)}
//       className={`py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 ${
//         order.statusPesanan === 'Dikirim' ? 'bg-blue-500 text-white' :
//         order.statusPesanan === 'Proses Packing' ? 'bg-yellow-400 text-black' :
//         order.statusPesanan === 'Terkirim' ? 'bg-green-500 text-white' :
//         order.statusPesanan === 'Dibatalkan' ? 'bg-red-500 text-white' :
//         'bg-blue-500 text-white' // Default color jika status tidak sesuai dengan yang diharapkan
//       }`}
//     >
//       <span className="mr-2">{order.statusPesanan}</span>
//       <FontAwesomeIcon icon={faEdit} className="text-white" />
//     </button>
//     {showDropdown && selectedOrderId === order.id && (
//       <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//         <div className="py-1">
//           <button
//             onClick={() => handleStatusChange('Dikirim')}
//             className={`block px-4 py-2 text-sm ${
//               order.statusPesanan === 'Dikirim' ? 'text-white bg-blue-500 hover:bg-blue-600' : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
//             }`}
//           >
//             Dikirim
//           </button>
//           <button
//             onClick={() => handleStatusChange('Proses Packing')}
//             className={`block px-4 py-2 text-sm ${
//               order.statusPesanan === 'Proses Packing' ? 'text-black bg-yellow-400 hover:bg-yellow-600' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
//             }`}
//           >
//             Proses Packing
//           </button>
//           <button
//             onClick={() => handleStatusChange('Dibatalkan')}
//             className={`block px-4 py-2 text-sm ${
//               order.statusPesanan === 'Dibatalkan' ? 'text-white bg-red-500 hover:bg-red-600' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
//             }`}
//           >
//             Dibatalkan
//           </button>
//         </div>
//         <button
//           onClick={handleUpdateStatus}
//           className={`block w-full text-left px-4 py-2 text-sm ${
//             order.statusPesanan === 'Dikirim' ? 'bg-blue-500 hover:bg-blue-600' :
//             order.statusPesanan === 'Proses Packing' ? 'bg-yellow-400 hover:bg-yellow-600' :
//             order.statusPesanan === 'Dibatalkan' ? 'bg-red-500 hover:bg-red-600' :
//             'bg-blue-500 hover:bg-blue-600' 
//           }`}
//         >
//           Save
//         </button>
//       </div>
//     )}
//   </div>
// </div>
//       </div>
//     </div>
//   ))}
// </div>
//     </div>
    
//   );
// };

// export default ShopAdminPages;