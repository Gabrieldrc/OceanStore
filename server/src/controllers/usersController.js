const express = require('express');
const usersController = express.Router();
const userService = require('../services/userService');
const jwtService = require('../services/jwtService');
const ac = require('../config/ac.config');

usersController.post('/new_user', async (req, res) => {
  const permission = ac.can(req.session.role).createAny('user');
  const {user_name, user_password} = req.body;
  const resObject = {
    status: 'Access Denied',
    message: '',
  };
  if (!permission.granted) {
    resObject.message = 'You are not authorized to access this resource';

    return res.status(403).json(resObject);

  }
  if (!user_name || !user_password) {
    resObject.message = `Send 'user_name' and 'password'`;

    return res.status(400).json(resObject);

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
  resObject.status = 'ok';
  resObject.message = `user created: @${user_name}`;
  return res.status(201).send(resObject);

});

usersController.post('/login', async (req, res) => {
  const {user_name, user_password} = req.body;
  const resObject = {
    status: 'Access Denied',
    message: "",
  };
  if (!user_name || !user_password) {
    resObject.message = `Send 'user_name' and 'password'`;

    return res.status(400).json(resObject);

  }
  const userData = {
    user_name: user_name,
    password: user_password,
    role: 'user',
  }
  const result = await userService.loginUser(userData);
  if (!result.ok) {
    resObject.message = result.message;

    return res.status(400).json(resObject);

  }
  req.session.auth = true;
  resObject.status = 'ok';
  resObject.message = result.message;

  return res.status(201).json(resObject);

});

module.exports = usersController;