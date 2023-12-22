import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StockForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    bukuId: '',
    stok: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    e.target.reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="bukuId" className="block text-gray-700 text-sm font-bold mb-2">
          Buku ID:
        </label>
        <input
          type="text"
          id="bukuId"
          name="bukuId"
          className="border rounded w-full py-2 px-3"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="stok" className="block text-gray-700 text-sm font-bold mb-2">
          Stok:
        </label>
        <input
          type="number"
          id="stok"
          name="stok"
          className="border rounded w-full py-2 px-3"
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="bg-[#677C52] hover:bg-[#B7B7A4] text-white font-bold py-2 px-4 rounded"
      >
        {initialData ? 'Update Stock' : 'Add Stock'}
      </button>
    </form>
  );
};

StockForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};

export default StockForm;


// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { addStock, updateStock } from '../../modules/fetch/admins/gudang';

// const GudangForm = ({ initialData, onSubmitSuccess }) => {
//   const [formData, setFormData] = useState(initialData || {});

//   useEffect(() => {
//     // Jika ada initialData, perbarui formData saat prop berubah
//     if (initialData) {
//       setFormData(initialData);
//     }
//   }, [initialData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.id) {
//         // Jika formData memiliki properti id, artinya kita sedang dalam mode edit
//         await updateStock(formData.id, formData);
//       } else {
//         // Jika tidak ada id, artinya kita sedang dalam mode tambah
//         await addStock(formData);
//       }
//       // Panggil callback onSubmitSuccess setelah operasi berhasil
//       onSubmitSuccess();
//     } catch (error) {
//       console.error('Error submitting data:', error);
//       // Handle error if needed
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Tambahkan input fields sesuai kebutuhan */}
//       <label>
//         Nama Gudang:
//         <input
//           type="text"
//           name="nama"
//           value={formData.nama || ''}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       {/* Tambahan input fields lainnya */}
      
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// GudangForm.propTypes = {
//   initialData: PropTypes.object, // Data awal untuk mode edit
//   onSubmitSuccess: PropTypes.func.isRequired, // Callback ketika submit berhasil
// };

// export default GudangForm;
