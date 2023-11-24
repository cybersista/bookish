const express = require('express');
const router = express.Router();
const detailPesananController = require('../controllers/riwayatPesanan');

// Endpoint untuk mendapatkan semua riwayat pesanan
router.get('/', detailPesananController.getAllRiwayatPesanan);

// Endpoint untuk mendapatkan detail pesanan berdasarkan ID
router.get('/:id', detailPesananController.getDetailPesananById);

// Endpoint untuk mengupdate status pesanan berdasarkan ID
router.put('/:id', detailPesananController.updateStatusPesanan);



module.exports = router;
