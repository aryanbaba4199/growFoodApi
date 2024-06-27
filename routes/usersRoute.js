const express = require('express');
const router = express.Router();

const {getUser, getUsers, createUser} = require('../controller/users/authController');

router.get('/:email', getUser);
router.get('/message',getUsers);
router.post('/', createUser);

module.exports = router;