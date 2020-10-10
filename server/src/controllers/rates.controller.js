const express = require('express');
const ratesController = express.Router();
const authJwt = require('../middleware/authJwt');
const ac = require('../config/ac.config');
module.exports = ratesController;