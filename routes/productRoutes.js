const express = require('express');
const router = express.Router();

const { getProducts, createProduct, getBrands, getCategories } = require('../controller/productController');  // Make sure the path is correct

router.get('/', getProducts);
router.post('/', createProduct);
router.get('/brands', getBrands);
router.get('/category', getCategories);

module.exports = router;
