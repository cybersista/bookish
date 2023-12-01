// AccountForm.js
import React, { useState, useEffect } from 'react';

const AccountForm = ({ userDetails, updateUserDetails }) => {
  const [formData, setFormData] = useState({
    nama: userDetails.nama || '',
    alamat: userDetails.alamat || '',
    kodePos: userDetails.kodePos || '',
    telepon: userDetails.telepon || '',
  });

  useEffect(() => {
    setFormData({
      nama: userDetails.nama || '',
      alamat: userDetails.alamat || '',
      kodePos: userDetails.kodePos || '',
      telepon: userDetails.telepon || '',
    });
  }, [userDetails]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data ke fungsi updateUserDetails atau endpoint API untuk menyimpan perubahan pada backend
    updateUserDetails(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      {/* ... Bagian form lainnya ... */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Simpan Perubahan
      </button>
    </form>
  );
};

export default AccountForm;
