const { detailPesanan } = require('../models');

// Fungsi untuk menampilkan semua detail pesanan
const getAllDetailPesanan = async (req, res) => {
  try {
    console.log(detailPesanan); // Tambahkan baris ini
    const DetailPesanan = await detailPesanan.findAll();
    res.json(DetailPesanan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Fungsi untuk menampilkan detail pesanan berdasarkan ID
const getDetailPesananById = async (req, res) => {
  const { id } = req.params;
  try {
    const DetailPesanan = await detailPesanan.findByPk(id);
    if (!DetailPesanan) {
      return res.status(404).json({ status: 404, error: 'DetailPesanan not found' });
    }
    res.json(DetailPesanan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};

// Fungsi untuk membuat detail pesanan baru
const createDetailPesanan = async (req, res) => {
  const { userId, total, statusPesanan } = req.body;
  try {
    const newDetailPesanan = await detailPesanan.create({ userId, total, statusPesanan });
    res.status(201).json(newDetailPesanan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};

// Fungsi untuk memperbarui detail pesanan berdasarkan ID
const updateDetailPesanan = async (req, res) => {
  const { id } = req.params;
  const { userId, total, statusPesanan } = req.body;
  try {
    const DetailPesanan = await detailPesanans.findByPk(id);
    if (!DetailPesanan) {
      return res.status(404).json({ status: 404, error: 'DetailPesanan not found' });
    }
    await DetailPesanan.update({ userId, total, statusPesanan });
    res.json(DetailPesanan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};

// Fungsi untuk menghapus detail pesanan berdasarkan ID
const deleteDetailPesanan = async (req, res) => {
  const { id } = req.params;
  try {
    const DetailPesanan = await detailPesanans.findByPk(id);
    if (!DetailPesanan) {
      return res.status(404).json({ error: 'DetailPesanan not found' });
    }
    await DetailPesanan.destroy();
    res.json({ message: 'DetailPesanan deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllDetailPesanan,
  getDetailPesananById,
  createDetailPesanan,
  updateDetailPesanan,
  deleteDetailPesanan,
};
