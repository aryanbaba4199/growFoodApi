const express = require('express');
const router = express.Router();

const {analyticsData} = require('../controller/Admin/adminController');

router.get('/analytics', analyticsData); 

module.exports = router;