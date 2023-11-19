const express = require('express');
const router = express.Router();
const pesananItemController = require('../controllers/pesananItem');

// Mendapatkan semua pesananItems untuk pesanan tertentu
router.get('/:pesananId/pesananItems', pesananItemController.getAllPesananItems);

// Membuat pesananItem baru
router.post('/:pesananId/pesananItems', pesananItemController.createPesananItem);

// Mendapatkan satu pesananItem berdasarkan ID
router.get('/pesananItems/:pesananItemId', pesananItemController.getPesananItemById);

// Mengupdate pesananItem berdasarkan ID
router.put('/pesananItems/:pesananItemId', pesananItemController.updatePesananItem);

// Menghapus pesananItem berdasarkan ID
router.delete('/pesananItems/:pesananItemId', pesananItemController.deletePesananItem);

module.exports = router;
