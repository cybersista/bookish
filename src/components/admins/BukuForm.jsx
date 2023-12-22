// import PropTypes from "prop-types"; // Add prop-types import

// const BookForm = ({ onSubmit }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       penulisId: e.target.penulisId.value,
//       penerbitId: e.target.penerbitId.value,
//       kategoriId: e.target.kategoriId.value,
//       judul: e.target.judul.value,
//       harga: e.target.harga.value,
//       isbn: e.target.isbn.value,
//       tahunTerbit: e.target.tahunTerbit.value,
//       // Add more fields as needed
//     };
//     onSubmit(formData);
//     e.target.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//       <div className="mb-4">
//         <label
//           htmlFor="judul"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Judul:
//         </label>
//         <input
//           type="text"
//           id="judul"
//           name="judul"
//           className="border rounded w-full py-2 px-3"
//         />
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="penulisId"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Penulis ID:
//         </label>
//         <input
//           type="text"
//           id="penulisId"
//           name="penulisId"
//           className="border rounded w-full py-2 px-3"
//         />
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="penerbitId"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Penerbit ID:
//         </label>
//         <input
//           type="text"
//           id="penerbitId"
//           name="penerbitId"
//           className="border rounded w-full py-2 px-3"
//         />
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="kategoriId"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Kategori ID:
//         </label>
//         <input
//           type="text"
//           id="kategoriId"
//           name="kategoriId"
//           className="border rounded w-full py-2 px-3"
//         />
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="harga"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Harga:
//         </label>
//         <input
//           type="text"
//           id="harga"
//           name="harga"
//           className="border rounded w-full py-2 px-3"
//         />
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="isbn"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           ISBN:
//         </label>
//         <input
//           type="text"
//           id="isbn"
//           name="isbn"
//           className="border rounded w-full py-2 px-3"
//         />
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="tahunTerbit"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Tahun Terbit:
//         </label>
//         <input
//           type="text"
//           id="tahunTerbit"
//           name="tahunTerbit"
//           className="border rounded w-full py-2 px-3"
//         />
//       </div>

//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// // Add prop-type validation
// BookForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default BookForm;

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const BookForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    penulisId: "",
    penerbitId: "",
    kategoriId: "",
    judul: "",
    harga: "",
    isbn: "",
    tahunTerbit: "",
  });

  useEffect(() => {
    if (initialData) {
      // If initialData is provided, populate the form with the existing data
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
        <label
          htmlFor="judul"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Judul:
        </label>
        <input
          type="text"
          id="judul"
          name="judul"
          className="border rounded w-full py-2 px-3"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="penulisId"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Penulis ID:
        </label>
        <input
          type="text"
          id="penulisId"
          name="penulisId"
          className="border rounded w-full py-2 px-3"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="penerbitId"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Penerbit ID:
        </label>
        <input
          type="text"
          id="penerbitId"
          name="penerbitId"
          className="border rounded w-full py-2 px-3"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="kategoriId"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Kategori ID:
        </label>
        <input
          type="text"
          id="kategoriId"
          name="kategoriId"
          className="border rounded w-full py-2 px-3"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="harga"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Harga:
        </label>
        <input
          type="text"
          id="harga"
          name="harga"
          className="border rounded w-full py-2 px-3"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="isbn"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          ISBN:
        </label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          className="border rounded w-full py-2 px-3"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="tahunTerbit"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Tahun Terbit:
        </label>
        <input
          type="text"
          id="tahunTerbit"
          name="tahunTerbit"
          className="border rounded w-full py-2 px-3"
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="bg-[#677C52] hover:bg-[#B7B7A4] text-white font-bold py-2 px-4 rounded"
      >
        {initialData ? "Update" : "Submit"}
      </button>
    </form>
  );
};

// Add prop-type validation
BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};

export default BookForm;

