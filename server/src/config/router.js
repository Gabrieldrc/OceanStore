const express = require('express');
const  router = express.Router();
const  usersController = require('../controllers/usersController');
const  appsController = require('../controllers/appsController');
// for parsing multipart/form-data
const upload = require('../middleware/upload');

router.use('/users',upload.none(), usersController);
router.use('/apps',upload.single('image'), appsController);

module.exports = router;