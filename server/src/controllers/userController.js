const express = require('express');
const userController = express.Router();
const userService = require('../services/userService');

userController.post('/new_user', async (req, res) => {
  const {user_name, user_password} = req.body;
  if (!user_name || !user_password) {

  return res.status(400).send(`Send 'user_name' and 'password'`);

  }
  const userData = {
    user_name: user_name,
    password: user_password,
  }
  const result = await userService.createUser(userData);

  if (!result.ok) {

    return res.status(400).send(result.message);

  }

  return res.status(201).send(`user created: @${user_name}`);

});

userController.post('/login', async (req, res) => {
  const {user_name, user_password} = req.body;
  if (!user_name || !user_password) {

    return res.status(400).send(`Send 'user_name' and 'password'`);

  }
  const userData = {
    user_name: user_name,
    password: user_password,
  }
  const result = await userService.loginUser(userData);
  if (!result.ok) {

    return res.status(400).send(result.message);

  }

  return res.status(201).send(`user @${user_name} ${result.message}`);

});

module.exports = userController;