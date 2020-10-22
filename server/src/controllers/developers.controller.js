const developersController = require('express').Router();
const developerService = require('../services/developer.service');
const jwtService = require('../services/jwtService');
const ac = require('../config/ac.config');

developersController.post('/signup', async (req, res) => {
  const permission = ac.can(req.session.user.role).createAny('user');
  const {user_name, password} = req.body;
  const resObject = {
    status: 'Access Denied',
    message: '',
  };
  if (!permission.granted) {
    resObject.message = 'You are not authorized to access this resource';

    return res.status(403).json(resObject);

  }
  if (!user_name || !password) {
    resObject.message = `Send 'user_name' and 'password'`;

    return res.status(400).json(resObject);

  }
  const developerData = {
    user_name: user_name,
    password: password,
  }
  const result = await developerService.createDeveloper(developerData);

  if (!result.ok) {
    resObject.message = result.message;

    return res.status(400).send(resObject);

  }
  resObject.status = 'ok';
  resObject.message = `developer created: @${user_name}`;
  return res.status(201).send(resObject);

});

developersController.post('/signin', async (req, res) => {
  const permission = ac.can(req.session.user.role).createOwn('session');
  const {user_name, password} = req.body;
  let resObject = {
    status: 'Access Denied',
    message: "",
  };
  if (!permission.granted) {
    resObject.message = 'You are not authorized to access this resource';

    return res.status(403).json(resObject);

  }
  if (!user_name || !password) {
    resObject.message = `Send 'user_name' and 'password'`;

    return res.status(400).json(resObject);

  }
  let developerData = {
    user_name: user_name,
    role: 'developer'
  }
  const result = await developerService.loginDeveloper({...developerData, password: password});
  if (!result.ok) {
    resObject.message = result.message;

    return res.status(400).json(resObject);

  }
  const token = jwtService.generateToken(developerData);
  req.session.auth = true;
  req.session.user.role = 'developer';
  developerData.accessToken = token;

  return res.status(201).json(developerData);

});

module.exports = developersController;