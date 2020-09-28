const express = require('express');
const  router = express.Router();
const  usersController = require('../controllers/usersController');
const  appsController = require('../controllers/appsController');

router.use('/users', usersController);
router.use('/apps', appsController);

module.exports = router;