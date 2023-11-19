// routes/detailPesananRoute.js
const express = require('express');
const router = express.Router();
const detailPesananController = require('../controllers/detailPesanans');

router.get('/', detailPesananController.getAllDetailPesanan);
router.get('/:id', detailPesananController.getDetailPesananById);
router.post('/', detailPesananController.createDetailPesanan);
router.put('/:id', detailPesananController.updateDetailPesanan);
router.delete('/:id', detailPesananController.deleteDetailPesanan);

module.exports = router;
