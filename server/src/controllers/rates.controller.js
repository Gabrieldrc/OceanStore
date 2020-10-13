const express = require('express');
const ratesController = express.Router();
const rateService = require('../services/rate.service');
// const authJwt = require('../middleware/authJwt');
// const ac = require('../config/ac.config');

ratesController.get('/count/:app_name', async (req, res) => {
  const app_name = req.params.app_name;

  const appRates = await rateService.findAppRates(app_name);

  return res.status(200).json(appRates);

})

module.exports = ratesController;