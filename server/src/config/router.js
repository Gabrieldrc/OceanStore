const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const appsController = require('../controllers/appsController');

router.use('/users', userController);
router.use('/apps', appsController);

module.exports = router;