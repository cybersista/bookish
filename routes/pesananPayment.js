// routes/pesananPaymentRoutes.js

const express = require('express');
const router = express.Router();
const pesananPaymentController = require('../controllers/pesananPayment');

router.post('/:pesananId/pesananPayment', pesananPaymentController.createPesananPayment);
router.get('/:pesananId/pesananPayment', pesananPaymentController.getPesananPayments);
router.get('/:pesananId/pesananPayment/:pesananPaymentId', pesananPaymentController.getPesananPaymentById);
router.put('/:pesananId/pesananPayment/:pesananPaymentId',pesananPaymentController.updatePesananPayment);
// Menghapus pesananPayment berdasarkan ID
router.delete('/:pesananId/pesananPayments/:pesananPaymentId', pesananPaymentController.deletePesananPayment);



module.exports = router;
