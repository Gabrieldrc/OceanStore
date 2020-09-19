const express = require('express');
const appsController = express.Router();
const { userService } = require('../config/services');
const User = require('../models/User');

//PATH TO ADD AN USER
appsController.post('/new_app', (req, res) => {
  console.log(req.body);
  return res.status(201).send("server listen!");
});

module.exports = appsController;