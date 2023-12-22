import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StockForm from "../../components/admins/GudangForm";
import {
  getAllStocks,
  addStock,
  updateStock,
  deleteStock,
} from "../../modules/fetch/admins/gudang";

const GudangPage = () => {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [isCreateMode, setCreateMode] = useState(true);

  useEffect(() => {
    // Fetch all stocks when the component mounts
    fetchAllStocks();
  }, []);

  const fetchAllStocks = async () => {
    try {
      const allStocks = await getAllStocks();
      setStocks(allStocks);
    } catch (error) {
      console.error("Error fetching stocks:", error.message);
    }
  };

  const handleCreateStock = async (formData) => {
    try {
      await addStock(formData);
      // Refresh the stock list after creating a new stock
      fetchAllStocks();
      // Reset the form
      setSelectedStock(null);
      setCreateMode(true);
    } catch (error) {
      console.error("Error creating stock:", error.message);
    }
  };

  const handleUpdateStock = async (formData) => {
    try {
      if (selectedStock) {
        await updateStock(selectedStock.id, formData);
        // Refresh the stock list after updating a stock
        fetchAllStocks();
        // Reset the form and exit update mode
        setSelectedStock(null);
        setCreateMode(true);
      }
    } catch (error) {
      console.error("Error updating stock:", error.message);
    }
  };

  const handleDeleteStock = async (stockId) => {
    try {
      if (window.confirm("Are you sure you want to delete this stock?")) {
        await deleteStock(stockId);
        // Refresh the stock list after deleting a stock
        fetchAllStocks();
        // Reset the form and exit update mode
        setSelectedStock(null);
        setCreateMode(true);
      }
    } catch (error) {
      console.error("Error deleting stock:", error.message);
    }
  };

  const handleEditStock = (stock) => {
    setSelectedStock(stock);
    setCreateMode(false);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="mb-4">
        <Link to="/admins/dashboard" className="text-blue-500">
          Back to Dashboard
        </Link>
      </div>
      <h1 className="text-3xl font-semibold mb-4">Manage Gudang</h1>
      <div className="max-w-md">
        <StockForm
          onSubmit={isCreateMode ? handleCreateStock : handleUpdateStock}
          initialData={selectedStock}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Stocks:</h2>
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Buku ID</th>
              <th className="border p-2">Stok</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(stocks) &&
              stocks.map((stock, index) => (
                <tr key={stock.id}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{stock.bukuId}</td>
                  <td className="border p-2">{stock.stok}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleEditStock(stock)}
                      className="ml-2 bg-blue-500 text-white p-2 ml-auto"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteStock(stock.id)}
                      className="ml-2 bg-red-500 text-white p-2 ml-auto"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GudangPage;


// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import GudangForm from '../../components/admins/GudangForm';
// import { getAllStocks, addStock, updateStock, deleteStock } from '../../modules/fetch/admins/gudang';

// const GudangPage = () => {
//   const [gudangList, setGudangList] = useState([]);
//   const [selectedGudang, setSelectedGudang] = useState(null);
//   const [isCreateMode, setCreateMode] = useState(true);

//   useEffect(() => {
//     fetchGudangList();
//   }, []);

//   const fetchGudangList = async () => {
//     try {
//       const data = await getAllStocks();
//       console.log('Received gudang list data:', data);
  
//       if (Array.isArray(data)) {
//         setGudangList(data);
//       } else {
//         console.error('Received invalid gudang list data:', data);
//       }
//     } catch (error) {
//       console.error('Error fetching gudang list:', error);
//     }
//   };

//   const handleAddGudang = async (formData) => {
//     try {
//       await addStock(formData);
//       fetchGudangList();
//       setSelectedGudang(null);
//       setCreateMode(true);
//     } catch (error) {
//       console.error('Error adding gudang:', error);
//     }
//   };

//   const handleEditGudang = async (id, formData) => {
//     try {
//       await updateStock(id, formData);
//       fetchGudangList();
//       setSelectedGudang(null);
//       setCreateMode(true);
//     } catch (error) {
//       console.error('Error editing gudang:', error);
//     }
//   };

//   const handleDeleteGudang = async (id) => {
//     try {
//       if (window.confirm('Are you sure you want to delete this gudang?')) {
//         await deleteStock(id);
//         fetchGudangList();
//         setSelectedGudang(null);
//         setCreateMode(true);
//       }
//     } catch (error) {
//       console.error('Error deleting gudang:', error);
//     }
//   };

// //   const handleEditGudang = (gudang) => {
// //     setSelectedGudang(gudang);
// //     setCreateMode(false);
// //   };

//   return (
//     <div className="min-h-screen p-4">
//       <div className="mb-4">
//         <Link to="/admins/dashboard" className="text-blue-500">
//           Back to Dashboard
//         </Link>
//       </div>
//       <h1 className="text-3xl font-semibold mb-4">Manage Gudang</h1>
//       <div className="max-w-md">
//         <GudangForm
//           onSubmit={isCreateMode ? handleAddGudang : (formData) => handleEditGudang(selectedGudang.id, formData)}
//           initialData={selectedGudang}
//         />
//       </div>
//       <div className="mt-4">
//         <h2 className="text-xl font-semibold mb-2">Gudang:</h2>
//         <table className="min-w-full border">
//           <thead>
//             <tr>
//               <th className="border p-2">#</th>
//               <th className="border p-2">Nama</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {gudangList.map((gudang, index) => (
//               <tr key={gudang.id}>
//                 <td className="border p-2">{index + 1}</td>
//                 <td className="border p-2">{gudang.nama}</td>
//                 <td className="border p-2">
//                   <button
//                     onClick={() => handleEditGudang(gudang)}
//                     className="ml-2 bg-blue-500 text-white p-2 ml-auto "
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteGudang(gudang.id)}
//                     className="ml-2 bg-red-500 text-white p-2 ml-auto"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GudangPage;
