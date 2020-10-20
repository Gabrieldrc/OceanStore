const  router = require('express').Router();
const  usersController = require('../controllers/users.controller');
const  developersController = require('../controllers/developers.controller');
const logoutController = require('../controllers/logout.controller');
const  appsController = require('../controllers/apps.controller');
const  appDetailsController = require('../controllers/app_details.controller');
const  ratesController = require('../controllers/rates.controller');
const  commentsController = require('../controllers/comments.controller');
// for parsing multipart/form-data
const upload = require('../middleware/upload');

router.use('/users',upload.none(), usersController);
router.use('/developers',upload.none(), developersController);
router.use('/apps',upload.single('image'), appsController);
router.use('/app/details', appDetailsController);
router.use('/app/rates', ratesController);
router.use('/app/comments', commentsController);
router.use('/logout', logoutController);

module.exports = router;