// routes.js

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const router = express.Router();
router.use(bodyParser.json());

// Rute untuk '/api/buyer/cart'
router.get('/api/buyer/cart', controllers.getBuyerCart);
router.post('/api/buyer/cart', controllers.addToBuyerCart);

// Rute untuk '/items'
router.get('/items', controllers.getAllItems);
router.post('/items', controllers.addItem);

// Rute untuk '/items/{id}'
router.get('/items/:id', controllers.getItemById);
router.put('/items/:id', controllers.updateItemById);
router.delete('/items/:id', controllers.deleteItemById);

module.exports = router;
