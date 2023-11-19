const { pesananItem, detailPesanan } = require('../models');

// Controller untuk mendapatkan semua pesananItems untuk pesanan tertentu
const getAllPesananItems = async (req, res) => {
  try {
    const pesananId = req.params.pesananId;

    const pesanan = await detailPesanan.findByPk(pesananId);
    if (!pesanan) {
      return res.status(404).json({ status: 404, error: 'Pesanan not found' });
    }

    const pesananItems = await pesananItem.findAll({
      where: { pesananId: pesananId },
    });

    res.status(200).json(pesananItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};

// Controller untuk membuat pesananItem baru
const createPesananItem = async (req, res) => {
  try {
    const pesananId = req.params.pesananId;

    const pesanan = await detailPesanan.findByPk(pesananId);
    if (!pesanan) {
      return res.status(404).json({ status: 404, error: 'Pesanan not found' });
    }

    const newPesananItem = await pesananItem.create({
      namaProduk: req.body.namaProduk,
      jumlah: req.body.jumlah,
      hargaSatuan: req.body.hargaSatuan,
      pesananId: pesananId,
    });

    res.status(201).json(newPesananItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};

// Controller untuk mendapatkan satu pesananItem berdasarkan ID
const getPesananItemById = async (req, res) => {
  try {
    const pesananItemId = req.params.pesananItemId;

    const pesananItemData = await pesananItem.findByPk(pesananItemId);

    if (!pesananItemData) {
      return res.status(404).json({ status: 404, error: 'Pesanan Item not found' });
    }

    res.status(200).json(pesananItemData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};

// Controller untuk mengupdate pesananItem berdasarkan ID
const updatePesananItem = async (req, res) => {
  try {
    const pesananItemId = req.params.pesananItemId;

    const pesananItemData = await pesananItem.findByPk(pesananItemId);

    if (!pesananItemData) {
      return res.status(404).json({ status: 404,  error: 'Pesanan Item not found' });
    }

    await pesananItemData.update({
      namaProduk: req.body.namaProduk || pesananItemData.namaProduk,
      jumlah: req.body.jumlah || pesananItemData.jumlah,
      hargaSatuan: req.body.hargaSatuan || pesananItemData.hargaSatuan,
    });

    res.status(200).json(pesananItemData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};

// Controller untuk menghapus pesananItem berdasarkan ID
const deletePesananItem = async (req, res) => {
  try {
    const pesananItemId = req.params.pesananItemId;

    const pesananItemData = await pesananItem.findByPk(pesananItemId);

    if (!pesananItemData) {
      return res.status(404).json({ status: 404, error: 'Pesanan Item not found' });
    }

    await pesananItemData.destroy();

    res.status(204).json({ status: 204, message: 'Pesanan Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};

// Export controllers
module.exports = {
  getAllPesananItems,
  createPesananItem,
  getPesananItemById,
  updatePesananItem,
  deletePesananItem,
};
