const models = require('../models');

// Membuat pesananPayment baru
async function createPesananPayment(req, res) {
  try {
    const { pesananId, provider, statusBayar } = req.body;

    // Periksa apakah pesanan dengan id yang diberikan ada
    const pesanan = await models.detailPesanan.findByPk(pesananId);
    if (!pesanan) {
      return res.status(404).json({ status: 404, error: 'Pesanan not found' });
    }

    // Buat pembayaran terkait dengan pesanan yang sudah ada
    const pesananPayment = await models.pesananPayment.create({
      pesananId,
      provider,
      statusBayar,
    });

    res.status(201).json(pesananPayment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
}

// Mendapatkan semua pesananPayments
async function getPesananPayments(req, res) {
  try {
    const pesananPayments = await models.pesananPayment.findAll();
    res.status(200).json(pesananPayments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
}

// Mendapatkan satu pesananPayment berdasarkan ID
async function getPesananPaymentById(req, res) {
  try {
    const pesananPaymentId = req.params.pesananPaymentId;

    const pesananPaymentData = await models.pesananPayment.findByPk(pesananPaymentId);

    if (!pesananPaymentData) {
      return res.status(404).json({ status: 404, error: 'Pesanan Payment not found' });
    }

    res.status(200).json(pesananPaymentData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
}

// Mengupdate pesananPayment berdasarkan ID
async function updatePesananPayment(req, res) {
  try {
    const pesananPaymentId = req.params.pesananPaymentId;

    const pesananPaymentData = await models.pesananPayment.findByPk(pesananPaymentId);

    if (!pesananPaymentData) {
      return res.status(404).json({ status: 404, error: 'Pesanan Payment not found' });
    }

    await pesananPaymentData.update({
      pesananId: req.body.pesananId || pesananPaymentData.pesananId,
      provider: req.body.provider || pesananPaymentData.provider,
      statusBayar: req.body.statusBayar || pesananPaymentData.statusBayar,
    });

    res.status(200).json(pesananPaymentData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Menghapus pesananPayment berdasarkan ID
async function deletePesananPayment(req, res) {
  try {
    const pesananPaymentId = req.params.pesananPaymentId;

    const pesananPaymentData = await models.pesananPayment.findByPk(pesananPaymentId);

    if (!pesananPaymentData) {
      return res.status(404).json({ status: 404, error: 'Pesanan Payment not found' });
    }

    await pesananPaymentData.destroy();

    res.status(204).json({ status: 204, message: 'Pesanan Payment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
}

module.exports = {
  createPesananPayment,
  getPesananPayments,
  getPesananPaymentById,
  updatePesananPayment,
  deletePesananPayment,
};
