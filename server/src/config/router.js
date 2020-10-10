const express = require('express');
const  router = express.Router();
const  usersController = require('../controllers/users.controller');
const  appsController = require('../controllers/apps.controller');
const  appDetailsController = require('../controllers/app_details.controller');
const  ratesController = require('../controllers/rates.controller');
const  commentsController = require('../controllers/comments.controller');
// for parsing multipart/form-data
const upload = require('../middleware/upload');

router.use('/users',upload.none(), usersController);
router.use('/apps',upload.single('image'), appsController);
router.use('/app/details', appDetailsController);
router.use('/app/rates', ratesController);
router.use('/app/comments', commentsController);

module.exports = router;