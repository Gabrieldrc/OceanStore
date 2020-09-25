const express = require('express');
const usersController = express.Router();
const userService = require('../services/userService');
const jwtService = require('../services/jwtService');

usersController.post('/new_user', async (req, res) => {
  const {user_name, user_password} = req.body;
  const resObject = {
    success: false,
    message: "",
  };
  if (!user_name || !user_password) {
    resObject.message = `Send 'user_name' and 'password'`;

    return res.status(400).send(resObject);

  }
  const userData = {
    user_name: user_name,
    password: user_password,
  }
  const result = await userService.createUser(userData);

  if (!result.ok) {
    resObject.message = result.message;

    return res.status(400).send(resObject);

  }
  resObject.success = true;
  resObject.message = `user created: @${user_name}`;
  return res.status(201).send(resObject);

});

usersController.post('/login', async (req, res) => {
  const {user_name, user_password} = req.body;
  const resObject = {
    success: false,
    message: "",
  };
  if (!user_name || !user_password) {
    resObject.message = `Send 'user_name' and 'password'`;

    return res.status(400).send(resObject);

  }
  const userData = {
    user_name: user_name,
    password: user_password,
    role: 'user',
  }
  const result = await userService.loginUser(userData);
  if (!result.ok) {
    resObject.message = result.message;

    return res.status(400).send(resObject);

  }
  req.session.auth = true;
  resObject.message = result.message;

  return res.status(201).send(resObject);

});

module.exports = usersController;