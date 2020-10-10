const express = require('express');
const commentsController = express.Router();
const authJwt = require('../middleware/authJwt');
const ac = require('../config/ac.config');
module.exports = commentsController;