import React, { useState, useEffect } from 'react';

const RiwayatPesanan = () => {
  const [riwayatPesanan, setRiwayatPesanan] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:3000/riwayat-pesanan')
      .then(response => response.json())
      .then(data => setRiwayatPesanan(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Riwayat Pesanan</h1>
      <ul>
        {riwayatPesanan.map(pesanan => (
          <li key={pesanan.id}>
            <p>ID Pesanan: {pesanan.id}</p>
            {/* Tambahkan informasi pesanan lainnya */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RiwayatPesanan;
