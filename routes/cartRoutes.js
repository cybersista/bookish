const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');


router.post('/carts', cartController.createCart);
router.get('/carts', cartController.getAllCarts);
router.put('/carts/:id', cartController.updateCart);
router.delete('/carts/:id', cartController.deleteCart);


module.exports = router;
