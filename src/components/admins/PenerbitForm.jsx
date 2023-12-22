import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PenerbitForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    nama: '',
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
        <label htmlFor="nama" className="block text-gray-700 text-sm font-bold mb-2">
          Nama:
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          className="border rounded w-full py-2 px-3"
          onChange={handleChange}
          value={formData.nama}
        />
      </div>

      <button
        type="submit"
        className="bg-[#677C52] hover:bg-[#B7B7A4] text-white font-bold py-2 px-4 rounded"
      >
        {initialData ? 'Update' : 'Submit'}
      </button>
    </form>
  );
};

PenerbitForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};

export default PenerbitForm;
