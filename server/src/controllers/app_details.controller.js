const express = require('express');
const appDetailsController = express.Router();
const appDetailsService = require('../services/app_details.service');
// const authJwt = require('../middleware/authJwt');
// const ac = require('../config/ac.config');

appDetailsController.get('/:app_name', async (req, res) => {
  const app_name = req.params.app_name;
  const exists = await appDetailsService.appDetailsExists(app_name);
  if (!exists) {

    return res.status(404).json({status: 'Not found', message: 'Does not exists'});

  }
  const app_details = await appDetailsService.findAppDetails(app_name);

  return res.status(200).json(app_details);

})

module.exports = appDetailsController;