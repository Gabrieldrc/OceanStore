const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.use('/users', userController);

module.exports = router;