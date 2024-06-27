
const express = require('express');
const router = express.Router();

const {createOrder} = require('../controller/orders/orderController');

router.post('/create', createOrder);

module.exports = router;